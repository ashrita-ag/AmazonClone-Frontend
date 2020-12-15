import "./CheckoutLeft.css";
import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct.js";
import { UseStateValue } from "../StateProvider/StateContext.js";

function CheckoutLeft() {
  const [cart] = UseStateValue().cart;
  // <CheckoutProduct
  //   key={p.id}
  //   id={p.id}
  //   img={p.img}
  //   heading={p.heading}
  //   price={p.price}
  // />
  useEffect(() => {
    var products = [];
    for (let i = 0; i < cart.length; i++)
    products.push(<h1>Hi</h1>);
  }, [cart]);

  

  return (
    <div className="checkoutLeft">
      <div className="checkoutLeftHeading">
        <div className="checkoutLeftHeading1">Shopping Cart</div>
        <div className="checkoutLeftHeading2">Price </div>
      </div>
      {/* {products} */}
    </div>
  );
}

export default CheckoutLeft;
