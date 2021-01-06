import React, { useState } from "react";
import "./Products.css";
import { UseStateValue } from "../StateProvider/StateContext.js";
import StarRateIcon from "@material-ui/icons/StarRate";
import axios from "axios";

function Products(props) {
  const state = UseStateValue();
  const [cart, setCart] = state.cart;
  const [isLogged] = state.isLogged;
  const [token] = state.token;
  const [loading, setLoading] = useState(false);

  const addToCart = () => {
    setLoading(true);
    if (isLogged) {
      const index = cart.findIndex((cartItem) => cartItem._id === props.id);
      if (index > -1) {
        console.log(cart[index]);
        axios
          .patch(
            "/user/cart/update",
            { count: cart[index].count + 1, product: props.id },
            {
              headers: {
                Authorization: token,
              },
            }
          )
          .then((e) => {
            console.log(e.data);
            setCart(e.data);
          });
      } else {
        axios
          .get("/product/detail/" + props.id)
          .then((detail) => {
            detail.data["count"] = 1;
            axios
              .patch(
                "/user/cart/add",
                { cart: detail.data },
                {
                  headers: {
                    Authorization: token,
                  },
                }
              )
              .then((e) => {
                console.log(e.data);
                setCart(e.data);
              })
              .catch((e) => console.log(e));
          })
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please Login Or Create an account");
    }
    setLoading(false);
  };

  // const test = () => {
  //   axios
  //     .patch(
  //       "/user/cart/update_cart",
  //       { product: props.id },
  //       {
  //         headers: {
  //           Authorization: token,
  //         },
  //       }
  //     )
  //     .then((e) => console.log(e.data))
  //     .catch((e) => console.log(e));
  // };

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
          <button
            className="amazonButton"
            onClick={addToCart}
            disabled={loading}
          >
            Add to Cart
          </button>
        </div>
        {/* <button onClick={test}>Test</button> */}
      </div>
    </div>
  );
}

export default Products;
