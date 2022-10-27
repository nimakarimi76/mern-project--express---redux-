import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/shopping-cart/components/cartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
