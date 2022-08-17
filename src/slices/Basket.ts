import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  items: [];
}

const initialState: CounterState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state: any, action: any) => {
      state.items = [...state.items, action.payload];
    },
    remove: (state: any, action: any) => {
      console.log(action.payload.id);
      const index: number = state.items.findIndex(
        (item: any) => item.id == action.payload.id
      );
      console.log("index", index);

      let newBasket = [...state.items];
      newBasket.splice(index, 1);
      state.items = newBasket;
    },
  },
});

export const { add, remove } = basketSlice.actions;

export const selectBasketItems = (state: any) => state.basket.items;

export const selectBasketItemsWithId = (state: any, id: number) =>
  state.basket.items.filter((item: any) => item.id === id);

export const selectBasketTotal = (state: any) =>
  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
