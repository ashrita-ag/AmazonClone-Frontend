import "./CheckoutProduct.css";
import React from "react";
// import { UseStateValue } from "../StateProvider/StateContext.js";

function handleClickGiftBox() 
{
  const checkedBoxes = document.querySelectorAll(
    'input[name="checkoutProductGiftCheckbox"]:checked'
  );
  const targetBox = document.querySelector('input[name="giftCheckbox"]');
  if (checkedBoxes.length > 0) targetBox.checked = true;
  else targetBox.checked = false;
}

function CheckoutProduct(props) {
  // const [{ cart }, dispatch] = UseStateValue();
  // // //  [cart,dispatch]

  const deleteFromCart = () => {
    // dispatch({
    //   type: DeleteFromCart,
    //   id: props.id,
    // });

  //   console.log(cart);
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
