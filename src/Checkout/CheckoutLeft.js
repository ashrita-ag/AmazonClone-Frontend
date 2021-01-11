import "./CheckoutLeft.css";
import React from "react";
import CheckoutProduct from "./CheckoutProduct.js";
import { UseStateValue } from "../StateProvider/StateContext.js";

function CheckoutLeft() {
  const [cart] = UseStateValue().cart;

  const displayCartItems = () =>
    cart.map((cartItem) => (
      <CheckoutProduct
        key={cartItem._id}
        _id={cartItem._id}
        img={cartItem.imageUrl}
        heading={cartItem.title}
        price={cartItem.price}
        count={cartItem.count}
      />
    ));

  return (
    <div className="checkoutLeft">
      <div className="checkoutLeftHeading">
        <div className="checkoutLeftHeading1">Shopping Cart</div>
        <div className="checkoutLeftHeading2">Price </div>
      </div>
      {displayCartItems()}
    </div>
  );
}

export default CheckoutLeft;
