import React from "react";
import Cart from "./Cart";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2 pl-5"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Welcome to our shop
            </h2>
          </li>
          <li>
            <Cart />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
