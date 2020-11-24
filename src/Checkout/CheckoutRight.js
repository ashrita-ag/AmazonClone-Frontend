import "./CheckoutRight.css";
import React from "react";
import { UseCartValue } from "../StateProvider/CartContext.js";

function CheckoutRight() {
  
  const [{ cart }] = UseCartValue();
  var subtotal = parseInt(0);
  cart.forEach((cartItem) => {
    subtotal = subtotal + parseInt(cartItem.price);
  });

  return (
    <div className="checkoutRight">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="checkoutRightImage"
        className="checkoutRightImage"
      />
      <div className="checkoutRightBox">
        <div> Subtotal ({cart.length} item): </div>
        <div style={{ fontWeight: "bold" }}>{subtotal}.00 </div>
        <div style={{ fontSize: "14px" }}>
          <input
            type="checkbox"
            name="giftCheckbox"
            style={{
              marginRight: "5px",
            }}
          />
          This order contains a gift.
        </div>
        <button className="amazonButton checkoutRightBoxButton">
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}

export default CheckoutRight;
