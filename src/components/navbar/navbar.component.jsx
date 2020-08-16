import React from "react";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo className="logo" />

      <div className="options">
        <div className="option">Shop</div>
        <div className="option">Contact</div>
        <div className="option">Sign In</div>
      </div>
    </div>
  );
};

export default Navbar;
