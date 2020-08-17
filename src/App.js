import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shoppage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
      <Route path="/signin" component={SignInAndSignUpPage} />
    </>
  );
}

export default App;
