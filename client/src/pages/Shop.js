import React from "react";
import Auth from "../features/auth/Auth";
import Layout from "../features/shopping-cart/components/Layout";
import { useSelector } from "react-redux";

const Shop = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return <div>{!isLoggedIn ? <Auth /> : <Layout />}</div>;
};

export default Shop;
