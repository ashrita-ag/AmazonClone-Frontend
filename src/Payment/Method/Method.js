import React, { useEffect } from "react";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.js";
import "./Method.css";
import Loading from "../../Components/Loading";

const promise = loadStripe(
  "pk_test_51Hz0IIKQyTwAQr5fPCo2sAr0kFh6JmysqDwf4TgZg9aqyvY2LA49XPJTadjirFzHg14IKZx95zLyVSzUSOpDU5Mx00r40n4kKg"
);

export default function Method() {
  const [token] = UseStateValue().token;
  const [, setCart] = UseStateValue().cart;
  const [loading, setLoading] = UseStateValue().loading;

  useEffect(() => {
    if (token) {
      setLoading(true);
      // console.log("Deleting User Cart");
      axios
        .patch(
          "/user/cart/delete_cart",
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((res) => {
          const errorMsg = res.data.errorMsg;
          if (errorMsg) alert("Some error occured. Try again!");
          else {
            // console.log("UserCart Deleted");
            console.log(res.data);
            setCart(res.data.cart);
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Some error occured. Try again!");
        });
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {loading ? (
        <Loading />
      ) : (
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>
      )}{" "}
      <div className="seperator20"></div>
      <div className="checkoutLine2">
        This is a test payment. Use Card Number = 424242424242424242 for
        Confirming Order.
      </div>
    </div>
  );
}
