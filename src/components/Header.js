import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
  const { cartItems } = useContext(Context);
  const cartClassName =
    cartItems.length > 0
      ? "ri-shopping-cart-fill ri-3x"
      : "ri-shopping-cart-line ri-2x";

  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        <i className={cartClassName}></i>
      </Link>
    </header>
  );
}

export default Header;
