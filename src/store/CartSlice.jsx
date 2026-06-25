import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // Add plant to cart (quantity 1)
    addToCart: (state, action) => {
      const existing = state.items.find((item) => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Increase quantity by 1
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    // Decrease quantity; remove if it hits 0
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },
    // Remove item completely from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

// Total number of items in cart (for badge)
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Total price of all items
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

// Check if a plant is already in cart
export const selectIsInCart = (state, plantId) =>
  state.cart.items.some((item) => item.id === plantId);

export default cartSlice.reducer;
