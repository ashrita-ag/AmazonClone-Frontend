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
    setLoading(true);
    updateCart(count - 1);
    setCount(count - 1);
    setLoading(false);
  };

  const increment = () => {
    setLoading(true);
    updateCart(count + 1);
    setCount(count + 1);
    setLoading(false);
  };
  const deleteFromCart = () => {
    setLoading(true);
    updateCart(0);
    setCount(0);
    setLoading(false);
  };

  const updateCart = (c) => {
    axios
      .patch(
        "/user/cart/update",
        { count: c, product: props._id },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) alert("Some error Occured. Please Try Again.");
        else {
          console.log(m.data);
          setCart(m.data);
        }
      })
      .catch((e) => {
        alert("Some error Occured. Please Try Again.");
        console.log(e);
      });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProductLeft">
        <div className="checkoutProductImg">
          <img src={props.img} alt="checkoutProductImage" />
        </div>

        <div className="checkoutProductText">
          <div className="checkoutProductHeading">{props.heading}</div>
          <img
            src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"
            alt="amazonFulfilled"
          />

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
          <button
            className="countButton"
            onClick={decrement}
            disabled={loading}
          >
            -
          </button>
          <span className="count">{props.count}</span>
          <button
            className="countButton"
            onClick={increment}
            disabled={loading}
          >
            +
          </button>

          {/* <DeleteIcon /> */}

          <button
            className="deletebtn amazonButton"
            onClick={deleteFromCart}
            disabled={loading}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="checkoutProductRight">{props.price}.00</div>
    </div>
  );
}

export default CheckoutProduct;
