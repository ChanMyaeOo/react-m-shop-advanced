import cartActionTypes from "./cart.types";
export const toggleCartDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const reduceItemFromCart = (item) => ({
  type: cartActionTypes.REDUCE_ITEM_FROM_CART,
  payload: item,
});
