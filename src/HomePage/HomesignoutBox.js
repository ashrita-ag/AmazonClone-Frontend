import React from "react";
// import axios from "axios";

function HomesignoutBox() {
  return (
    <div className="homeGridItemSignIn">
      <div className="homeGridItemSignInHeading">Welcome to Amazon</div>
      <div className="homeGridItemtext">
        Shop now for some amazing deals on a wide range of products.
      </div>
      <a href="/logout" className="HomeSignoutLink">
        Sign out
      </a>
    </div>
  );
}

export default HomesignoutBox;
