import { Link } from "react-router-dom";
import React from "react";

function HomesigninBox() {
  return (
    <div className="homeAuthBox">
      <div className="homeAuthBoxHeading">
        Sign in for your best experience
      </div>
      <Link to="/login">
        <button className="homeAuthBoxButton amazonButton">
          Sign in securly.
        </button>
      </Link>
    </div>
  );
}

export default HomesigninBox;
