import React from "react";
import { Route, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./components/checkout-page/checkout-page.component";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Navbar />

        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          path="/signin"
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
