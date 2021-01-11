import React from "react";
import "./BannerImage.css";

function BannerImage(props) {
   localStorage.removeItem("Payment")

  return (
    <div>
      <div className="bannerImage" style={{ backgroundColor: props.backcolor }}>
        <img src={props.image} alt="img" />
      </div>
    </div>
  );
}

export default BannerImage;
