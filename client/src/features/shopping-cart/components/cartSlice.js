import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  itemsCount: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      //* check if the item is already in the cart
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.itemsCount++;
      }
    },
    removeFromCart(state, action) {},
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, showCart } = cartSlice.actions;

export default cartSlice.reducer;
