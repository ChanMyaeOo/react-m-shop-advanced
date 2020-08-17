import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
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
        <Route path="/signin" component={SignInAndSignUpPage} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
