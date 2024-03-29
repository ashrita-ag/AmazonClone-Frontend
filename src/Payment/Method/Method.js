import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.js";
import "./Method.css";
import { UseStateValue } from "../../StateProvider/StateContext";
const _ = require("lodash");

const promise = loadStripe(
  "pk_test_51Hz0IIKQyTwAQr5fPCo2sAr0kFh6JmysqDwf4TgZg9aqyvY2LA49XPJTadjirFzHg14IKZx95zLyVSzUSOpDU5Mx00r40n4kKg"
);

export default function Method() {
  const [deliveryAddress] = UseStateValue().deliveryAddress;
  const [cart] = UseStateValue().cart;

  const handleCardNumberClick = (e) =>{
    console.log(e); //to do (Automically fill card number)
  }

  return _.isEmpty(deliveryAddress) ? (
    <div>You cannot access this page</div>
  ) : (
    <div className="method">
      <img
        src="https://m.media-amazon.com/images/G/31/x-locale/checkout/complete-payment-banner._CB141834354_.gif"
        alt="AmazonBanner"
        className="methodImageBanner"
      />
      {cart.length > 0 ? (
        <div>
          <div className="methodHeading">Complete Payment</div>
          <div className="checkoutLine1">
            Pay faster for all your shopping needs{" "}
            <span style={{ color: "maroon" }}>with Amazon Pay balance</span>
          </div>
          <div className="checkoutLine2">
            Get Instant refund on cancellations | Zero payment failures
          </div>
          <div className="seperator20"></div>

          <Elements stripe={promise}>
            <CheckoutForm />
          </Elements>

          <div className="seperator20"></div>
          <div className="checkoutLine2">
            This is a test payment. Use Card Number{" "}
            <span className="cardNumber" onClick={handleCardNumberClick}>4242 4242 4242 4242</span> for
            Successful Payment. This test card number work with any CVC, postal
            code and future expiry date.
          </div>
        </div>
      ) : (
        <div>Cart cannot be empty</div>
      )}
    </div>
  );
}
