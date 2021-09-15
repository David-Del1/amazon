import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

//Selectors - This is how we pull info from the Global store slice
export const selectitems = state => state.basket.items;

export default basketSlice.reducer;