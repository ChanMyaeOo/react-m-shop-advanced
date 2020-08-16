import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Navbar from "./components/navbar/navbar.component";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Route path="/" component={HomePage} exact />
    </>
  );
}

export default App;
