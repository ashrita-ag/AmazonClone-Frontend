import "./CheckoutRight.css";
import React from "react";
// import { useHistory } from "react-router-dom";
import { UseStateValue } from "../StateProvider/StateContext.js";

const unCheckAll = () => {
  const targetBox = document.querySelector('input[name="giftCheckbox"]');
  const checkedBoxes = document.querySelectorAll(
    'input[name="checkoutProductGiftCheckbox"]:checked'
  );
  if (targetBox.checked === false) {
    checkedBoxes.forEach((box) => {
      box.checked = false;
    });
  }
};

function CheckoutRight() {
  const [cart] = UseStateValue().cart;
  const [totalItems] = UseStateValue().totalItems;
  // let history = useHistory();

  const subtotal = (cart) =>
    cart?.reduce(
      (amt, item) => amt + parseInt(item.price) * parseInt(item.count),
      0
    );

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
          {subtotal(cart)}.00
        </div>
        <div style={{ fontSize: "14px" }}>
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
        <a href="/payment/address">
          <button className="amazonButton checkoutRightBoxButton">
            Proceed to Buy
          </button>
        </a>
      </div>
    </div>
  );
}

export default CheckoutRight;
