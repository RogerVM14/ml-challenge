import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
//Slices
import productsInformationReducer from "./slices/products";
const persistConfig = {
  key: "ml",
  storage,
};

const reducers = combineReducers({
  products: productsInformationReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const persist = persistedReducer;

export default configureStore({
  reducer: persist,
  middleware: [thunk],
});
