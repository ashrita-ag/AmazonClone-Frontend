import React from "react";
import "./HomeProduct.css";

function HomeProduct(props) {
  return (
    <div className="homeProduct">
      <div className="homeProductHeading"> {props.heading}</div>
      <div className="homeProductImage">
        <img src={props.image} alt="homeProductImage" />
      </div>
      <a href={props.link} className={props.class}>
        See more offers.
      </a>
    </div>
  );
}

export default HomeProduct;
