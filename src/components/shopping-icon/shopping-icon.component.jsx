import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShopIcon } from "../../assets/images/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import "./shopping-icon.styles.scss";

const ShoppingIcon = ({ toggleCartDropdown }) => (
  <div className="cart-icon" onClick={() => toggleCartDropdown()}>
    <ShopIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default connect(null, { toggleCartDropdown })(ShoppingIcon);
