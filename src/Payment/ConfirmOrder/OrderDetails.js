import React from "react";
import "./OrderDetails.css";

function OrderDetails(props) {
  return (
    <div className="orderDetails">
      <div className="orderDetailHeading">
        {props.index}. {props.heading}
      </div>
      <div className="orderDetailPrice">
        &#8377;
        {props.price}
        <span className="orderDetailQuantity">- Quantity: {props.count}</span>
      </div>
    </div>
  );
}

export default OrderDetails;
