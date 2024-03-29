import "./CheckoutRight.css";
import React from "react";
import { UseStateValue } from "../StateProvider/StateContext.js";
import { Link } from "react-router-dom";

function CheckoutRight() {
  const [totalItems] = UseStateValue().totalItems;
  const [gift, setGift] = UseStateValue().gift;
  const [cost] = UseStateValue().cost;
  const [loading] = UseStateValue().loading;

  const unCheckAll = () => {
    const targetBox = document.querySelector('input[name="giftCheckbox"]');
    const checkedBoxes = document.querySelectorAll(
      'input[name="checkoutProductGiftCheckbox"]:checked'
    );

    if (targetBox) {
      if (!targetBox.checked) {
        checkedBoxes.forEach((box) => {
          box.checked = false;
        });
        setGift(false);
      } else setGift(true);
    }
  };

  console.log({ gift, cost, totalItems });

  return (
    <div className="checkoutRight">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="checkoutRightImage"
        className="checkoutRightImage"
      />
      <div className="checkoutRightBox">
        <div> Subtotal ({totalItems} item): </div>
        <div style={{ fontWeight: "bold" }}>
          <sup className="productDetailsCurrency">&#8377;</sup>
          <span id="totalCost">{cost}.00</span>
        </div>
        <div style={{ fontSize: "13px" }}>
          <input
            type="checkbox"
            name="giftCheckbox"
            style={{
              marginRight: "5px",
            }}
            onChange={unCheckAll}
          />
          This order contains a gift.
        </div>
        <Link to="/payment/address">
          <button
            className="amazonButton checkoutRightBoxButton"
            disabled={loading}
          >
            Proceed to Buy
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutRight;
