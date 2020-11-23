import "./CheckoutLeft.css";
import React from "react";
import CheckoutProduct from "./CheckoutProduct.js";

function CheckoutLeft() {
  return (
    <div className="checkoutLeft">
      <div className="checkoutLeftHeading">
        <div className="checkoutLeftHeading1">Shopping Cart</div>
        <div className="checkoutLeftHeading2">Price </div>
      </div>

      {/* PRODUCTS */}
      {/* <CheckoutProduct
        img="https://images-eu.ssl-images-amazon.com/images/I/41LyBR2PH+L._AC_US218_FMwebp_QL70_.jpg"
        heading="(Renewed) AmazonBasics RJ45 Cat-6 Ethernet Patch/LAN Cable -5Feet (1.5Meters)"
        price="227"
      />
      <CheckoutProduct
        img="https://images-eu.ssl-images-amazon.com/images/I/41LyBR2PH+L._AC_US218_FMwebp_QL70_.jpg"
        heading="(Renewed) AmazonBasics RJ45 Cat-6 Ethernet Patch/LAN Cable -5Feet (1.5Meters)"
        price="227"
      />
      <CheckoutProduct
        img="https://images-eu.ssl-images-amazon.com/images/I/41LyBR2PH+L._AC_US218_FMwebp_QL70_.jpg"
        heading="(Renewed) AmazonBasics RJ45 Cat-6 Ethernet Patch/LAN Cable -5Feet (1.5Meters)"
        price="227"
      /> */}
    </div>
  );
}

export default CheckoutLeft;
