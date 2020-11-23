import "./CheckoutRight.css"
import React from 'react'

function CheckoutRight() {
    return (
        
            <div className="checkoutRight">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
            alt="checkoutRightImage"
            className="checkoutRightImage"
          />
          <div className="checkoutRightBox">
            <div> Subtotal (1 item): </div>
            <div style={{ fontWeight: "bold" }}>00.00 </div>
            <div style={{ fontSize: "14px" }}>
              <input
                type="checkbox"
                name="giftCheckbox"
                style={{
                  marginRight: "5px",
                }}
              />
              This order contains a gift.
            </div>
            <button className="amazonButton checkoutRightBoxButton">
              Proceed to Buy{" "}
            </button>
          </div>
        </div>
        
    )
}

export default CheckoutRight
