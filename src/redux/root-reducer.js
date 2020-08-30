import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducerr from "./directory/directory-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducerr,
});

export default persistReducer(persistConfig, rootReducer);
