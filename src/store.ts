import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./slices/Basket";
import restaurantReducer from "./slices/Restaurant";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
