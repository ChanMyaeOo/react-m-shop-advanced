import ShopActionTypes from "./shop-types";

export const updateCollectionToMap = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionMap,
});
