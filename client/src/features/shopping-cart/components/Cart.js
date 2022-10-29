import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import cartIcon from "./shopping-cart.png";

import { showCart } from "./cartSlice";

const Cart = () => {
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(showCart());
  };

  return (
    <div className="cartIcon" onClick={handleShowCart}>
      {itemsCount === 0 ? (
        <img className="h-5" src={cartIcon} alt="cart" />
      ) : (
        <span className="flex text-green-700">
          {itemsCount}
          <img className="h-5 mx-1" src={cartIcon} alt="cart" />
        </span>
      )}
    </div>
  );
};

export default Cart;
