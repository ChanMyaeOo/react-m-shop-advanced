import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import ShopPage from "./pages/shop/shoppage.component";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
    </>
  );
}

export default App;
