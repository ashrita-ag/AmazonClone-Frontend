import React from "react";
import "./OrderItems.css";

function OrderItems(props) {
  return (
    <div className="orderItems">
      <img src={props.img} alt="orderItemsImage" className="orderItemsImage" />
      <div className="orderItemsText">
        <div className="orderItemsHeading">{props.heading}</div>
        <div className="orderItemsQuantity">Quantity: {props.count}</div>
        <div className="orderItemsPrice">Price: &#8377; {props.price}</div>
      </div>
    </div>
  );
}

export default OrderItems;
