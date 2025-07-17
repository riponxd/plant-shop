import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // {id, name, price, image, category, quantity}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.items.find(i => i.id === item.id);
      if (!exists) {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    increase: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrease: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    remove: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increase, decrease, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
