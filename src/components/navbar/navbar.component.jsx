import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/">
          Contact
        </Link>
        <Link className="option" to="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
