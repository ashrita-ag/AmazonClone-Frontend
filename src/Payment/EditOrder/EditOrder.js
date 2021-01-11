import React from "react";
import "./EditOrder.css";
import CheckoutLeft from "../../Checkout/CheckoutLeft.js";
import { Link } from "react-router-dom";

// import { UseStateValue } from "../StateProvider/StateContext.js";
// CHANGE THIS PAGEEEEEEEEEEEEEEEEEEEEEE

function EditOrder() {

  // const [cart] = UseStateValue().cart;
  // const displayItems = () =>
  //   cart.map((cartItem) => (
  //     <EditOrderProduct
  //       key={cartItem._id}
  //       id={cartItem._id}
  //       img={cartItem.imageUrl}
  //       heading={cartItem.title}
  //       price={cartItem.price}
  //       count={cartItem.count}
  //     />
  //   ));

  return (
    <div className="editOrderMain">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt="amazonLogo"
        className="confirmOrderImg"
      />
      <div className="separator"></div>
      {/* <div className="editOrderHeading">Edit Quantities</div> */}
      {/* <div className="editOrderText">Items</div> */}
      {/* <hr></hr> */}
      <CheckoutLeft />
      
      {/* {displayItems()} */}

      <div className="separator"></div>
      <div className="confirmOrderGreyBtn">
        <Link to="/payment/confirm_order">
          <button className="amazonButton confirmOrderContinueBtn">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default EditOrder;
