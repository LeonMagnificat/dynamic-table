import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import booksReducer from "../reducers/booksReducer";

export const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  books: booksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
