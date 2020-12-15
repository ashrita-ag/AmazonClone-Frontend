import React from "react";
import "./Products.css";
import { UseStateValue } from "../StateProvider/StateContext.js";
import StarRateIcon from "@material-ui/icons/StarRate";
import axios from "axios";

function Products(props) {
  const state = UseStateValue();
  const [, setCart] = state.cart; //cart
  const [isLogged] = state.isLogged;
  const [token] = state.token;

  const addToCart = () => {
    if (isLogged) {
      // console.log(props.id);
      axios
        .patch(
          "/user/cart/add",
          { cart: props.id },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((e) => {
          // console.log(e.data);
          setCart(e.data);
        })
        .catch((e) => console.log(e));
    } else {
      alert("Please Login Or Create an account");
    }
  };

  const rating = [];
  for (let i = 0; i < props.rating; i++) rating.push(<StarRateIcon key={i} />);

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
          <div className="productDetailsRating"> {rating}</div>
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
