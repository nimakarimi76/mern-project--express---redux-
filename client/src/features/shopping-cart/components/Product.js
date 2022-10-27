import React from "react";
import "./Product.css";

import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCartFunction = () => {
    dispatch(
      addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCartFunction}>Add to cart</button>
    </div>
  );
};

export default Product;
