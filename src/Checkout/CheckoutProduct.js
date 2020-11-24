import "./CheckoutProduct.css";
import React from "react";
// import Dropdown from "react-bootstrap/Dropdown";
import { UseCartValue } from "../StateProvider/CartContext.js";

function CheckoutProduct(props) {
  const [{ cart }, dispatch] = UseCartValue();
  // //  [cart,dispatch]

  const deleteFromCart = () => {
    dispatch({
      type: "Delete_from_Cart",
      id: props.id,
    });

    console.log(cart);
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
            />
            This will be a gift.
          </div>

          <button className="amazonButton" onClick={deleteFromCart}>
            Delete
          </button>
        </div>
      </div>
      <div className="checkoutProductRight">{props.price}.00</div>
    </div>
  );
}

export default CheckoutProduct;
