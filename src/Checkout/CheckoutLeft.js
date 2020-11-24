import "./CheckoutLeft.css";
import React from "react";
import CheckoutProduct from "./CheckoutProduct.js";
import { UseCartValue } from "../StateProvider/CartContext.js";

function CheckoutLeft() {
  const [{ cart }] = UseCartValue();

  const displayCartItems = (cart) =>
    cart.map((cartItem) => (
      <CheckoutProduct
        key={cartItem.id}
        id={cartItem.id}
        img={cartItem.img}
        heading={cartItem.heading}
        price={cartItem.price}
      />
    ));

  return (
    <div className="checkoutLeft">
      <div className="checkoutLeftHeading">
        <div className="checkoutLeftHeading1">Shopping Cart</div>
        <div className="checkoutLeftHeading2">Price </div>
      </div>

      {displayCartItems(cart)}

      {/**/}
    </div>
  );
}

export default CheckoutLeft;
