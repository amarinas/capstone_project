import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h2>
        <Link to="/">Pic Some</Link>
      </h2>
      <Link to="/cart">
        <i class="ri-shopping-cart-2-fill ri-3x"></i>
      </Link>
    </header>
  );
}

export default Header;
