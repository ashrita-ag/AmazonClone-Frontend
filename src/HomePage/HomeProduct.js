import React from "react";
import "./HomeProduct.css";
import { Link } from "react-router-dom";

function HomeProduct(props) {
  return (
    <div className="homeProduct">
      <div className="homeProductHeading"> {props.heading}</div>
      <div className="homeProductImage">
        <img src={props.image} alt="homeProductImage" />
      </div>
      <Link to={props.link} className={props.class}>
        See more offers.
      </Link>
    </div>
  );
}

export default HomeProduct;
