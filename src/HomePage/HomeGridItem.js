import React from "react";
import "./HomeGridItem.css";

// THIS CONTAINS SIGN IN DISPLAYED ON HOMEPAGE
function HomeGridItem() {
  return (
    <div className="homeGridItem">
      <div className="homeGridItemSignIn">
        <div className="homeGridItemSignInHeading">Sign in for your best experience</div>
        <button className="homeGridItemSignInButton">Sign in securly.</button>
      </div>

      <div className="homeGridItemImage">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61hwdcuuW%2BL._SL1000_.jpg"
          alt="homeGridItemImage"
        />
      </div>
    </div>
  );
}

export default HomeGridItem;
