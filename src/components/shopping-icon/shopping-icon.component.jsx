import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShopIcon } from "../../assets/images/shopping-bag.svg";
import { toggleCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItemCount } from "../../redux/cart/cart.selectors";
import "./shopping-icon.styles.scss";

const ShoppingIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={() => toggleCartDropdown()}>
    <ShopIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});
export default connect(mapStateToProps, { toggleCartDropdown })(ShoppingIcon);
