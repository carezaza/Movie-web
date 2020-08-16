import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import moviesReducer from "./movies/reducer";
import cartReducer from "./cart/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["moviesReducer", "cartReducer"],
};

const rootReducer = combineReducers({ moviesReducer, cartReducer });

export default persistReducer(persistConfig, rootReducer);
