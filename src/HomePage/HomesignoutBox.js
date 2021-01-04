import React from "react";
// import axios from "axios";

function HomesignoutBox() {
  return (
    <div className="homeAuthBox">
      <div className="homeAuthBoxHeading">Welcome to Amazon</div>
      <div className="homeGridItemtext">
        Shop now for some amazing deals on a wide range of products.
      </div>
      <a href="/logout" className="homeAuthLink">
        Sign out
      </a>
    </div>
  );
}

export default HomesignoutBox;
