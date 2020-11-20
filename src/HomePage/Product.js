import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <div className="product">
      <div className="productHeading"> {props.heading}</div>
      <div className="productImage">
        <img src={props.image} alt="productImage" />
      </div>
      <a href={props.link} className={props.class}>
        See more offers.
      </a>
    </div>
  );
}

export default Product;
