import React from "react";
import "./POproduct.css";

function POProduct(props) {
  return (
    <div className="poProducts">
      <img src={props.img} alt="productImage" className="poProductLeft" />
      <div className="poProductRight">
        <div className="poProductHeading">{props.heading}</div>
        <div className="poProductPrice">
          &#8377;
          {props.price}{" "}
        </div>
        <div className="poProductQuantity"> Quantity: {props.count}</div>
      </div>
    </div>
  );
}

export default POProduct;
