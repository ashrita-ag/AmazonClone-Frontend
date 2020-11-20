import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import TogglerMenu from "./TogglerMenu.js";

export default function Header() {
  return (
    <div className="header">
      <TogglerMenu />

      <Link to="/" className="headerLink">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AmazonLogo"
          className="headerLogo"
        />
      </Link>

      <div className="headerSearch">
        <input type="text" className="headerSearchInput" />
        <SearchIcon className="headerSearchIcon" />
      </div>

  
      <div className="headerNavbar">
        <div className="headerNavOption">
           
          <img
            src="https://img.icons8.com/color/25/000000/india.png"
            alt="languageIcon"
            className="headerLanguageIcon"
          />
        </div>

        <Link to="/" className="headerLink">
          <div className="headerNavOption">
            {/*DROPDOWN */}
            <div className="headerNavText1">Hello,Sign in</div>
            <div className="headerNavText2">Account & Lists</div>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerNavOption">
            <div className="headerNavText1">Returns</div>
            <div className="headerNavText2">& Orders</div>
          </div>
        </Link>

        <Link to="/" className="headerLink">
          <div className="headerNavOption">
            {/*DROPDOWN */}
            <div className="headerNavText1">Try</div>
            <div className="headerNavText2">Prime</div>
          </div>
        </Link>
      </div>

      <Link to="/" className="headerLink">
        <div className="headerCart">
          <ShoppingCartIcon className="headerCartIcon" />
          <div className="headerCartItems">0</div> {/*Dynamic Update */}
        </div>
      </Link>
    </div>
  );
}
