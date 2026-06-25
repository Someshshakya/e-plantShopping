import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const selectIsInCart = (state, plantId) =>
  state.cart.items.some((item) => item.id === plantId);

export default cartSlice.reducer;
