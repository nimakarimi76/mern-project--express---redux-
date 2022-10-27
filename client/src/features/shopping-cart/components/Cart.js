import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";

import { showCart } from "./cartSlice";

const Cart = () => {
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(showCart());
  };

  return (
    <div className="cartIcon" onClick={handleShowCart}>
      <h3>Cart: {itemsCount} Items</h3>
    </div>
  );
};

export default Cart;
