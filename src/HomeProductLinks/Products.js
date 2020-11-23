import React from "react";
import "./Products.css";
// import Button from "react-bootstrap";

const addToCart = (e) => {
  console.log(e);
};

function Products(props) {
  return (
    <div className="products">
      <div className="productImg">
        <img src={props.productImg} alt="productImage" />
      </div>

      <div className="productText">
        <div className="productDetails">
          <div className="productDetailsHeading">{props.heading}</div>
          <div className="productDetailsPrice">
            <sup className="productDetailsCurrency">&#8377;</sup>
            {props.price}.00
          </div>
          <div className="productDetailsRating">{props.rating}</div>
        </div>

        <div className="productButton ">
          <button className="amazonButton" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
