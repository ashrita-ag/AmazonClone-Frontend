import React from "react";
import "./Checkout.css";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight.js";
import { UseCartValue } from "../StateProvider/CartContext.js";

const emptyCart = () => (
  <div className="checkoutLeftEmptyCart">
    <img
      src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
      alt="emptyCartImg"
    />
    <div>
      <div className="emptyCartText1">Your Shopping Cart is Empty.</div>
      <div className="emptyCartText2">
        Continue shopping on <a href="/">Amazon.in</a>
      </div>
    </div>
  </div>
);

const checkoutComponents = () => (
  <div className="checkoutContainer">
    <CheckoutLeft />
    <CheckoutRight />
  </div>
);

function Checkout() {
  const [{ cart }] = UseCartValue();
  return (
    <div className="checkout">
      <div className="checkoutLine1">
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "maroon" }}>with Amazon Pay balance</span>
      </div>

      <div className="checkoutLine2">
        Get Instant refund on cancellations | Zero payment failures
      </div>

      {cart.length > 0 ? checkoutComponents() : emptyCart()}
    </div>
  );
}

export default Checkout;
