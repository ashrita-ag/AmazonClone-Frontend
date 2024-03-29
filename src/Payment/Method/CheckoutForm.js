import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import axios from "axios";
import "./CheckoutForm.css";

export default function CheckoutForm() {
  const [token] = UseStateValue().token;
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [intent, setIntent] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (token) {
      // console.log("Creating Payment Intent");
      axios
        .post(
          "/api/checkout/create-payment-intent",
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        )
        .then((res) => {
          const errorMsg = res.data.errorMsg;
          if (errorMsg)
            setError("Some error occured. Refresh the Page and Try again!");
          else {
            // console.log("PaymentIntent Created");
            setIntent(true);
            setClientSecret(res.data.clientSecret);
          }
        })
        .catch((e) => {
          console.log(e);
          setError("Some error occured. Refresh the Page and Try again!");
        });
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

  const paymentSuccess = () => {
    setError(null);
    setSucceeded(true);

    axios
      .post(
        "/api/delivery/update_payment",
        {},
        { headers: { Authorization: token } }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg)
          setError("Some error occured. Refresh the Page and Try again!");
        else {
          console.log(m.data);
          window.location.replace("/orders");
          // setCart([]);
          // setDeliveryAddress({});
        }
      })
      .catch((e) => {
        console.log(e);
        setError("Some error occured. Refresh the Page and Try again!");
      });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    setProcessing(false);

    if (payload.error) {
      setError(
        `Payment failed ${payload.error.message} Refresh the page to try again.`
      );
    } else {
      paymentSuccess();
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
          disabled={processing || disabled || succeeded || !intent}
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

        <p className={processing ? "card-error" : "card-error hidden"}>
          Payment in progress. Do not refresh the page.
        </p>

        <p className={succeeded ? "result-message" : "result-message hidden"}>
          Payment succeeded, redirecting to Your Orders....
        </p>

        {/* <Link to={`https://dashboard.stripe.com/test/payments`}>
            Stripe dashboard.
          </Link>  */}
      </form>
    </div>
  );
}
