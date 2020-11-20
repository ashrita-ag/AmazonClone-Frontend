import React from "react";
import "./HomeGridItem.css";

// THIS CONTAINS SIGN IN DISPLAYED ON HOMEPAGE
function HomeGridItem() {
  return (
    <div className="homeGridItem">
      <div className="signIn">
        <div className="signInHeading">Sign in for your best experience</div>
        <button className="signInButton">Sign in securly.</button>
      </div>

      <div className="productGridImage">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Nov20/Diwali/DesktopGateway_CategoryCard_379X304_Gifting_Purple._SY304_CB417108240_.jpg"
          alt="productGridImage"
        />
      </div>
    </div>
  );
}

export default HomeGridItem;
