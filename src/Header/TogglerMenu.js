import React from "react";
import "./TogglerMenu.css";

function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
  document.getElementById("sideNav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

function TogglerMenu() {
  return (
    <div>
      <div id="sideNav" className="sidenav">
        <a href className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>

        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Clients</a>
        <a href="/">Contact</a>
      </div>
      <div>
        <span className="togglerMenu" onClick={() => openNav()}>
          &#9776;
        </span>
      </div>
    </div>
  );
}

export default TogglerMenu;
