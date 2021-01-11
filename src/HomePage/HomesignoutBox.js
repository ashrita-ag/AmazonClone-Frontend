import React from "react";
import { Link } from "react-router-dom";

function HomesignoutBox() {
  return (
    <div className="homeAuthBox">
      <div className="homeAuthBoxHeading">Welcome to Amazon</div>
      <div className="homeGridItemtext">
        Shop now for some amazing deals on a wide range of products.
      </div>
      <Link to="/logout" className="homeAuthLink">
        Sign out
      </Link>
    </div>
  );
}

export default HomesignoutBox;
