import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "../slices/example";
import themeSettingsReducer from "../slices/themeSettings";
import configDataReducer from "../slices/configData";
import categoryDataReducer from "../slices/categoryData";
import utilsReducers from "../slices/utils";
import profileInfoReducers from "../slices/profileInfo";
// import cartReducer from "../slices/cart";
import wishListReducer from "../slices/wishList";

//register all reducers here
export const rootReducer = combineReducers({
  example: exampleReducer,
  themeSettings: themeSettingsReducer,
  configData: configDataReducer,
  categoryData: categoryDataReducer,
  utilsData: utilsReducers,
  profileInfo: profileInfoReducers,
  // cart: cartReducer,
  wishList: wishListReducer,
});
