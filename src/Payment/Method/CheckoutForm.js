import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import axios from "axios";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const [token] = UseStateValue().token;
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (succeeded) setTimeout(() => setRedirect(true), 5000);
  }, [succeeded]);

  const stripe = useStripe();
  const elements = useElements();

  // useEffect(() => {
  //   if (token) {
  //     console.log("Order Created");
  //     axios
  //       .post(
  //         "/order/createOrder",
  //         {},
  //         {
  //           headers: {
  //             Authorization: token,
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, [token]);

  useEffect(() => {
    if (token) {
      console.log("Hullo");
      axios
        .post(
          "/checkout/create-payment-intent",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        )
        .then((res) => {
          console.log("PaymentIntent Created");
          setClientSecret(res.data.clientSecret);
        })
        .catch((e) => console.log(e));
    }
  }, [token]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <div>
      <form id="payment-form" className="methodForm" onSubmit={handleSubmit}>
        <h6 className="methodFormHeading">Enter your card details</h6>
        <CardElement
          id="card-element"
          options={cardStyle}
          onChange={handleChange}
        />
        <button
          className="methodButton"
          disabled={processing || disabled || succeeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? <div className="spinner" id="spinner"></div> : "Pay"}
          </span>
        </button>

        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}

        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, redirecting to Homepage...
          {redirect && window.location.replace("/")}
          {/* <a href={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </a>
          Refresh the page to pay again. */}
        </p>
      </form>
    </div>
  );
}
