import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/appSlice";  // ← changed filename here

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;