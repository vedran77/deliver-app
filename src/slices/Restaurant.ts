import { createSlice } from "@reduxjs/toolkit";

type Restaurant = {
  id: number;
  imgUrl: string;
  title: string;
  rating: string;
  genre: string;
  address: string;
  shortDesc: string;
  long: number;
  lat: number;
};

export interface CounterState {
  restaurant: Restaurant;
}

const initialState: CounterState = {
  restaurant: {
    id: -1,
    imgUrl: "",
    title: "",
    rating: "",
    genre: "",
    address: "",
    shortDesc: "",
    long: 0,
    lat: 0,
  },
};

export const restaurant = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurant.actions;

export const selectRestaurant = (state: any) => state.restaurant.restaurant;

export default restaurant.reducer;
