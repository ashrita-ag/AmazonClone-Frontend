import "./CheckoutProduct.css";
import React, { useState, useEffect } from "react";
import { UseStateValue } from "../StateProvider/StateContext.js";
import axios from "axios";

function CheckoutProduct(props) {
  const [count, setCount] = useState(props.count);
  const [, setCart] = UseStateValue().cart;
  const [token] = UseStateValue().token;
  const [gift, setGift] = UseStateValue().gift;
  const [loading, setLoading] = UseStateValue().loading;
  const [error, setError] = useState("");

  const handleClickGiftBox = () => {
    if (document) {
      const checkedBoxes = document.querySelectorAll(
        'input[name="checkoutProductGiftCheckbox"]:checked'
      );
      checkedBoxes.length > 0 ? setGift(true) : setGift(false);
    }
  };

  useEffect(() => {
    const target = document.querySelector('input[name="giftCheckbox"]');
    if (target) target.checked = gift;
  }, [gift]);

  const decrement = () => {
    updateCart(count - 1);
    setCount(count - 1);
  };

  const increment = () => {
    updateCart(count + 1);
    setCount(count + 1);
  };
  const deleteFromCart = () => {
    updateCart(0);
    setCount(0);
  };

  const updateCart = (c) => {
    setLoading(true);
    setError("");
    axios
      .patch(
        "/api/user/cart/update",
        { count: c, product: props._id },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError("Some error Occured. Please Try Again.");
        else {
          console.log(m.data);
          setCart(m.data);
        }
      })
      .catch((e) => {
        setError("Some error Occured. Please Try Again.");
        console.log(e);
      });
    setLoading(false);
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProductImageContainer">
        <img
          src={props.img}
          alt="checkoutProductImage"
          className="checkoutProductImg"
        />
      </div>
      <div className="checkoutProductText">
        <div className="checkoutProductLeft">
          <div className="checkoutProductHeading">{props.heading}</div>
          <div className="checkoutInStock">In stock</div>
          <div className="checkoutFreeDelivery">Eligible for FREE Shipping</div>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt="amazonFulfilled"
            className="checkoutProductAmazonFulfilled"
          />{" "}
          <div className="checkoutProductGift">
            <input
              type="checkbox"
              name="checkoutProductGiftCheckbox"
              style={{
                marginRight: "5px",
              }}
              onClick={handleClickGiftBox}
            />
            This will be a gift.
          </div>
          <div className="checkoutProductButtonContainer">
            {" "}
            <button
              className="countButton"
              onClick={decrement}
              disabled={loading}
            >
              -
            </button>
            <div className="count">{props.count}</div>
            <button
              className="countButton"
              onClick={increment}
              disabled={loading}
            >
              +
            </button>
            <div
              className={loading ? "deletebtn clickDeleteBtn" : "deletebtn"}
              onClick={deleteFromCart}
            >
              Delete
            </div>
          </div>
          <div className="errorMsgNew"> {error}</div>
        </div>
        <div className="checkoutProductRight">
          <span className="productDetailsCurrency">&#8377; </span>
          {props.price}.00
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
