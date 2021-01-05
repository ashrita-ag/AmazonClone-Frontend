import React from "react";
import "./HeaderTogglerMenu.css";
import { Link } from "react-router-dom";


function headerTogglerOpenNav() {
  document.getElementById("headerTogglerSideNav").style.width = "250px";
  document.getElementById("overlay").style.display = "block";

}
function headerTogglerCloseNav() {
  document.getElementById("headerTogglerSideNav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}

function HeaderTogglerMenu() {
  return (
    <div className="headerTogglerMenu">
      <div id="headerTogglerSideNav" className="headerTogglerSideNav">
        <Link
          to="# "
          className="headerTogglerclosebtn"
          onClick={() => headerTogglerCloseNav()}
        >
          &times;
        </Link>

        <Link to="/">Home</Link>
        <Link to="/">Accounts & Lists</Link>
        <Link to="/">Cart</Link>
        <Link to="# ">Shop with Us</Link>
        <Link to="/like-new-products" className="headerTogglerNavOption">
          Like-New Products
        </Link>
        <Link to="/home-office" className="headerTogglerNavOption">
          Home Office Utilities
        </Link>
        <Link to="/additional-items" className="headerTogglerNavOption">
          Explore Additional Items
        </Link>
      </div>
      <div>
        <span className="headerTogglerMenuBtn" onClick={() => headerTogglerOpenNav()}>
          &#9776;
        </span>
      </div>
    </div>
  );
}

export default HeaderTogglerMenu;
