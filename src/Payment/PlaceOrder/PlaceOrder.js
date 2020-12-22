import React from "react";
import "./PlaceOrder.css";
import { UseStateValue } from "../../StateProvider/StateContext";

function PlaceOrder() {
  const [deliveryAddress] = UseStateValue().deliveryAddress;
  const [deliverySpeed] = UseStateValue().deliverySpeed;

  const placeOrderAddress = () => {
    if (deliveryAddress) {
      const {
        name,
        house,
        area,
        landmark,
        city,
        pin,
        phone,
        country,
      } = deliveryAddress;
      return (
        <div>
          {name} <br />
          {house},{area} <br />
          {landmark},{city} <br />
          {country} {pin} <br />
          Phone: {phone}
        </div>
      );
    }
  };

  const placeOrderDeliveryDate = () => {
    const today = new Date();
    var d = today.getDay();
    d = deliverySpeed === 0 ? d + 5 : deliverySpeed === 80 ? d + 2 : d + 1;
    d = d % 7;
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][d];
    return deliverySpeed === 0
      ? "4-5 Days (" + day + ")"
      : deliverySpeed === 80
      ? "2 Days (" + day + ")"
      : "Tomorrow (" + day + ")";
  };

  return (
    <div className="placeOrder">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif"
        alt="amamzonLogo"
        className="placeOrderImg"
      />
      <div className="placeOrderHeading">
        Review your order and Make Payment
      </div>
      <div className="placeOrderText">
        By placing your order, you agree to Amazon's privacy notice and
        conditions of use.
      </div>
      <div className="placeOrderContainer">
        <div className="placeOrderLeft">
          <div className="placeOrderShippingContainer">
            <div className="placeOrderSmallHeading">Shipping Address </div>
            <div className="placeOrderAddress">{placeOrderAddress()}</div>
          </div>
          <div className="placeOrderOrder">
            <div className="placeOrderSmallHeading">
              Items shipped from Amazon
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._V384100965_.png"
                alt="amazonAssured"
              />
            </div>
            <div className="placeOrderDeliveryDate">
              Estimated Delivery: {placeOrderDeliveryDate()}
            </div>
            <div className="placeOrderOrderDetails">
              {/* Order goes here */}
            </div>
          </div>
        </div>

        <div className="placeOrderRight">{/* Subtotal Component */}</div>
      </div>
    </div>
  );
}

export default PlaceOrder;
