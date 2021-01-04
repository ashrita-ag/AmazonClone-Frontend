import React from "react";
import "./OrderItems.css";

function OrderItems(props) {
  return (
    <div className="orderItems">
      <div className="orderItemsImage">
        <img src={props.img} alt="orderItemsImage" />
      </div>
      <div className="orderItemsText">
        <div className="orderItemsHeading">{props.heading}</div>
        <div className="orderItemsQuantity">Quantity: {props.count}</div>
        <div className="orderItemsPrice">Price: {props.price}</div>
      </div>
    </div>
  );
}

export default OrderItems;
