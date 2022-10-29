import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const itemsList = useSelector((state) => state.cart.itemsList);
  const itemsCount = useSelector((state) => state.cart.itemsCount);

  let total = 0;
  itemsList.forEach((item) => (total += item.totalPrice));

  return (
    <div className="cart-container text-center  shadow-md shadow-gray-300">
      {itemsCount === 0 ? (
        <div className="text-2xl font-bold mb-3">
          Your shopping cart is empty!
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold ">Your Cart</h2>
            <div className="flex items-center">
              <h3 className="text-lg mt-3 mr-9">Total Price: €{total}</h3>
              <button className="orderBtn mr-9 mb-3">Place Your Order</button>
            </div>
          </div>
          {itemsInCart()}
        </div>
      )}
    </div>
  );

  function itemsInCart() {
    return (
      <ul>
        {itemsList.map((item) => {
          return (
            <li key={item.id}>
              <CartItem
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                total={item.totalPrice}
              />
            </li>
          );
        })}
      </ul>
    );
  }
};

export default CartItems;
