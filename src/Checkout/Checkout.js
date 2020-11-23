import React from "react";
import "./Checkout.css";
import CheckoutLeft from "./CheckoutLeft";
import CheckoutRight from "./CheckoutRight.js";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkoutLine1">
        Pay faster for all your shopping needs{" "}
        <span style={{ color: "maroon" }}>with Amazon Pay balance</span>
      </div>

      <div className="checkoutLine2">
        Get Instant refund on cancellations | Zero payment failures
      </div>

      <div className="checkoutContainer">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
    </div>
  );
}

export default Checkout;
