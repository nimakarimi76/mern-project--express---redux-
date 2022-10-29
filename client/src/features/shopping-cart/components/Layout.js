import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cart.showCart);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        {showCart && <CartItems />}
        <Products />
      </div>
    </React.Fragment>
  );
};

export default Layout;
