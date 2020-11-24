import React from "react";
import "./Products.css";
import { UseCartValue } from "../StateProvider/CartContext.js";
// import Button from "react-bootstrap";

function Products(props) {
  const [, dispatch] = UseCartValue(); 
  //  [cart,dispatch]

  const addToCart = () => {
    dispatch({
      type: "Add_to_Cart",
      item: {
        heading: props.heading,
        img: props.productImg,
        price: props.price,
      },
    });
    // console.log(cart);
  };

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
