import React from 'react'
import './Checkout.css'
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkoutLeft">

                <div className="leftHeading">Your Shopping Basket</div>

              <div className="checkoutText" >
              The price and availability of items at Amazon.in are subject to change. 
              The shopping cart is a temporary place to store a list of your items and reflects each item's most recent price.<br />
              Do you have a promotional code? We'll ask you to enter your claim code when it's time to pay.
              </div> 
            </div>

            <div className="checkoutRight">
            <div className="leftHeading">Your Shopping Basket</div>
                
            </div>

        </div>
    )
}

export default Checkout
