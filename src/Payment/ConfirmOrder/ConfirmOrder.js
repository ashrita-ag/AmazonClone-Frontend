import React from "react";
import "./ConfirmOrder.css";
import { UseStateValue } from "../../StateProvider/StateContext";
import OrderDetails from "./OrderDetails";
import axios from "axios";
import { Link } from "react-router-dom";


function ConfirmOrder() {
  const paymentItem = localStorage.getItem("Payment");
  console.log({ paymentItem });

  const [deliveryAddress] = UseStateValue().deliveryAddress;
  const [cart] = UseStateValue().cart;
  const [, setDeliverySpeed] = UseStateValue().deliverySpeed;
  const [token] = UseStateValue().token;
  const [, setFinalCost] = UseStateValue().finalCost;

  const handleSpeedUpdate = (e) => {
    console.log(e.target.value);
    axios
      .post(
        "/delivery/update_speed",
        { speed: e.target.value },
        { headers: { Authorization: token } }
      )
      .then((e) => {
        console.log(e.data);
        setDeliverySpeed(e.data.speed);
        setFinalCost(e.data.finalCost);
      })
      .catch((e) => console.log(e));
  };

  const finalAddress = () => {
    const { name, house, area, landmark, city, pin } = deliveryAddress;
    return (
      <div>
        Deliver to : {name} <br />
        {house},{area}, {landmark}
        <br />
        {city} {pin}
      </div>
    );
  };

  const order = () =>
    cart.map((i) => (
      <OrderDetails
        index={cart.indexOf(i) + 1}
        key={i._id}
        heading={i.title}
        price={i.price}
        count={i.count}
      />
    ));

  const dayOfWeek = (day) =>
    [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];

  const today = () => {
    const d = new Date();
    return (d.getDay() + 2) % 7;
  };

  return (
    <div className="confirmOrderMain">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt="amazonLogo"
        className="confirmOrderImg"
      />

      <div className="confirmOrderHeadingContainer">
        <div className="confirmOrderHeading">Choose your delivery options</div>
        <div className="confirmOrderGreyBtn">
          <Link to="/payment/place_order">
            <button className="amazonButton confirmOrderContinueBtn">
              Continue
            </button>
          </Link>
        </div>
      </div>

      <hr />
      <div className="confirmOrderShipmentContainer">
        <div className="confirmOrderLeft">
          <h5>Shipment</h5>
          <h6>
            Shipping from Amazon<span> </span>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/31/marketing/fba/fba-badge_18px._V384100965_.png"
              alt="amazonAssured"
            />
          </h6>
          <div className="confirmOrderDeliveryAddress">
            {deliveryAddress ? finalAddress() : "Deliver to : Loading..."}
          </div>
          <div className="confirmOrderOrderDetails">{order()}</div>
          <Link to="/payment/edit_order" className="editOrderLink">
            Change quantities or delete
          </Link>
        </div>
        <div className="confirmOrderRight">
          <h6>Choose a delivery speed</h6>
          <input
            type="radio"
            name="deliverySpeed"
            defaultChecked
            value={0}
            onClick={handleSpeedUpdate}
          />
          <label>
            <span className="deliveryDay">4-5 days</span>- FREE delivery for
            eligible orders
          </label>
          <br />
          <input
            type="radio"
            name="deliverySpeed"
            value={80}
            onClick={handleSpeedUpdate}
          />

          <label>
            <span className="deliveryDay">{dayOfWeek(today())}</span>- Two-Day
            Delivery at Rs. 80.
          </label>
          <br />

          <input
            type="radio"
            name="deliverySpeed"
            value={100}
            onClick={handleSpeedUpdate}
          />

          <label>
            <span className="deliveryDay">Tomorrow by 9pm</span>- One-Day
            Delivery at Rs. 100.
          </label>
        </div>
      </div>
      <hr />
      <div className="confirmOrderGreyBtn">
        <Link to="/payment/place_order">
          <button className="amazonButton confirmOrderContinueBtn">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ConfirmOrder;
