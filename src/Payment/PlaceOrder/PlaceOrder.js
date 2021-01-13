import React from "react";
import { Link } from "react-router-dom";

import "./PlaceOrder.css";
import { UseStateValue } from "../../StateProvider/StateContext";
import POproduct from "./POproduct";
const _ = require("lodash");

function PlaceOrder() {
  const [deliveryAddress] = UseStateValue().deliveryAddress;
  const [deliverySpeed] = UseStateValue().deliverySpeed;
  const [cart] = UseStateValue().cart;
  const [cost] = UseStateValue().cost;
  const [gift] = UseStateValue().gift;
  const [finalCost] = UseStateValue().finalCost;
  const [loading] = UseStateValue().loading;

  const finalTotal = deliverySpeed ? cost + deliverySpeed : cost + 40;

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

  const placeOrderDetails = () =>
    cart.map((i) => (
      <POproduct
        img={i.imageUrl}
        key={i._id}
        heading={i.title}
        price={i.price}
        count={i.count}
      />
    ));

  return _.isEmpty(deliveryAddress) ? (
    <div>You cannot access this page</div>
  ) : (
    <div className="placeOrder">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/confirm-banner._CB485949149_.gif"
        alt="amamzonLogo"
        className="placeOrderImg"
      />
      {cart.length > 0 ? (
        <div>
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
                  Items shipped from Amazon <span> </span>
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._V384100965_.png"
                    alt="amazonAssured"
                  />
                </div>
                <div className="placeOrderDeliveryDate">
                  Estimated Delivery: {placeOrderDeliveryDate()}
                </div>
                <div className="placeOrderOrderDetails">
                  {placeOrderDetails()}
                </div>
              </div>
            </div>

            <div className="placeOrderRight">
              {!loading && (
                <Link to="/payment/method">
                  <button className="amazonButton placeOrderSubmit">
                    Place your order
                  </button>
                </Link>
              )}{" "}
              <div className="placeOrderSmallHeading">Order Components</div>
              <div className="orderItems">
                <div className="orderItemText">
                  <div className="orderText">Items:</div>
                  <div className="orderText">Delivery:</div>
                  {gift && <div className="orderText">Gift:</div>}
                  {!deliverySpeed && cost >= 500 && (
                    <div>
                      <div className="orderText">Order Total:</div>
                      <div className="orderText">Promotion Applied</div>
                    </div>
                  )}
                </div>
                <div className="orderItemPrice">
                  <div className="orderPrice"> &#8377; {cost}</div>
                  <div className="orderPrice">
                    &#8377;
                    {!deliverySpeed ? 40 : deliverySpeed}
                  </div>
                  {gift && <div className="orderPrice"> &#8377; 25</div>}

                  {!deliverySpeed && cost >= 500 && (
                    <div>
                      <div className="orderPrice">
                        &#8377;
                        {isNaN(finalTotal)
                          ? "###"
                          : gift
                          ? finalTotal + 25
                          : finalTotal}
                      </div>
                      <div className="orderPrice"> &#8377; -40</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="orderFinal">
                Order Total: &#8377; {isNaN(finalCost) ? "###" : finalCost}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Cart cannot be empty</div>
      )}
    </div>
  );
}

export default PlaceOrder;
