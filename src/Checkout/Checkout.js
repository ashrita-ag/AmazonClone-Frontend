import React from "react";
import "./Checkout.css";

import { UseStateValue } from "../StateProvider/StateContext.js";
import EmptyCart from "./EmptyCart";
import CheckoutComponents from "./CheckoutComponents.js";

function Checkout() {
  localStorage.setItem("Payment", false);

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

      {cart.length > 0 ? <CheckoutComponents /> : <EmptyCart />}
    </div>
  );
}

export default Checkout;
