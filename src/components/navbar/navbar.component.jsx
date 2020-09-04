import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils";
import ShoppingIcon from "../shopping-icon/shopping-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  NavbarContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./navbar.styles";
const Navbar = ({ currentUser, hidden }) => {
  return (
    <NavbarContainer>
      <Link to="/">
        <LogoContainer />
      </Link>

      <OptionsContainer>
        <OptionLink to="/shop">Shop</OptionLink>
        <OptionLink to="/">Contact</OptionLink>

        {currentUser ? (
          <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <ShoppingIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </NavbarContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Navbar);
