import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection-page.component";
import { updateCollectionToMap } from "../../redux/shop/shop-actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectonPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    isLoading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollectionToMap } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      updateCollectionToMap(collectionsMap);
      this.setState({
        isLoading: false,
      });
    });
  }
  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectonPageWithSpinner isLoading={isLoading} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(null, { updateCollectionToMap })(ShopPage);
