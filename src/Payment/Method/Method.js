import React, { useEffect } from "react";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.js";
import "./Method.css";

const promise = loadStripe(
  "pk_test_51Hz0IIKQyTwAQr5fPCo2sAr0kFh6JmysqDwf4TgZg9aqyvY2LA49XPJTadjirFzHg14IKZx95zLyVSzUSOpDU5Mx00r40n4kKg"
);

export default function Method() {
  const [token] = UseStateValue().token;
  const [,setCart] = UseStateValue().cart;

  useEffect(() => {
    if (token) {
      console.log("Deleting User Cart");
      axios
        .patch(
          "http://localhost:5000/user/cart/delete_cart",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("UserCart Deleted");
          console.log(res.data);
          setCart(res.data.cart);

        })
        .catch((e) => console.log(e));
    }
  }, [token]);

  return (
    <div className="method">
      <img
        src="https://m.media-amazon.com/images/G/31/x-locale/checkout/complete-payment-banner._CB141834354_.gif"
        alt="AmazonBanner"
        className="methodImageBanner"
      />
      <div className="placeOrderHeading">Complete Payment</div>
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
    </div>
  );
}
