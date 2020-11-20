import React from "react";
import "./DetailCard.css";

function DetailCard(props) {
  return (
    <div className="detail">
      <div className="detailImage">
        <img src={props.image} alt="detailImage" />
      </div>
      <div className="detailHeading"> {props.heading}</div>
      <button className="addToCartBtn">Add to Cart</button>
    </div>
  );
}

export default DetailCard;
