import React from "react";
import { ReactComponent as ShopIcon } from "../../assets/images/shopping-bag.svg";
import "./shopping-icon.styles.scss";

const ShoppingIcon = () => (
  <div className="cart-icon">
    <ShopIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
export default ShoppingIcon;
