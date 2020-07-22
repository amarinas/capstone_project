import React, { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 4.99 * cartItems.length;
  const displayCost = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      console.log("order placed!");
      setButtonText("Place order");
      emptyCart();
    }, 3000);
  }
  return (
    <main className="cart-page">
      <h1> Check Out </h1>
      {cartItemsElements}
      <p className="total-cost">Total: {displayCost}</p>
      <div className="order-button">
        <button onClick={placeOrder}>{buttonText}</button>
      </div>
    </main>
  );
}

export default Cart;
