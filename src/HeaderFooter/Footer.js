import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AmazonLogo"
          className="footerLogo"
        />
        <div className="footerText">
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
