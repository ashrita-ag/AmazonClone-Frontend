import React from "react";
import "./Checkout.css";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight.js";

import { UseStateValue } from "../StateProvider/StateContext.js";
import EmptyCart from "./EmptyCart";

function Checkout() {
   localStorage.removeItem("Payment")

  const [cart] = UseStateValue().cart;
  return (
    <div className="checkout">
      <div className="checkoutLine1">
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "maroon" }}>with Amazon Pay balance</span>
      </div>

      <div className="checkoutLine2">
        Get Instant refund on cancellations | Zero payment failures
      </div>

      {cart.length > 0 ? (
        <div className="checkoutContainer">
          <CheckoutLeft />
          <CheckoutRight />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default Checkout;
