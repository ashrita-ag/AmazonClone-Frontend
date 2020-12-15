import React from "react";

function EmptyCart() {
  return (
    <div className="checkoutLeftEmptyCart">
      <img
        src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
        alt="emptyCartImg"
      />
      <div>
        <div className="emptyCartText1">Your Shopping Cart is Empty.</div>
        <div className="emptyCartText2">
          Continue shopping on <a href="/">Amazon.in</a>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
