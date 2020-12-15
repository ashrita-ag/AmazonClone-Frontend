import React from "react";
import "./HeaderTogglerMenu.css";

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
        <a
          href="# "
          className="headerTogglerclosebtn"
          onClick={() => headerTogglerCloseNav()}
        >
          &times;
        </a>

        <a href="/">Home</a>
        <a href="/">Accounts & Lists</a>
        <a href="/">Cart</a>
        <a href="# ">Shop with Us</a>
        <a href="/like-new-products" className="headerTogglerNavOption">
          Like-New Products
        </a>
        <a href="/home-office" className="headerTogglerNavOption">
          Home Office Utilities
        </a>
        <a href="/additional-items" className="headerTogglerNavOption">
          Explore Additional Items
        </a>
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
