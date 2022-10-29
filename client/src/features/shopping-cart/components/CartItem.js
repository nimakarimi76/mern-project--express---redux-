import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { addToCart, removeFromCart } from "./cartSlice";

const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2 className="font-bold"> {name}</h2>
      <p>€{price} </p>
      <p>x {quantity}</p>
      <article>Total €{total}</article>
      <div className="flex justify-center">
        <button className="cart-actions mx-3 m-0" onClick={removeHandler}>
          -
        </button>
        <button className="cart-actions m-0" onClick={addHandler}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
