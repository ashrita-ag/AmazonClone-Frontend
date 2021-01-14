import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import HeaderTogglerMenu from "./HeaderTogglerMenu.js";
import { UseStateValue } from "../StateProvider/StateContext.js";
import axios from "axios";

export default function Header() {
  const state = UseStateValue();
  const [name] = state.name;
  const [isLogged] = state.isLogged;
  const [totalItems] = state.totalItems;
  const [searchText, setSearchText] = useState("");

  const handleSubmitSearch = (event) => {
    event.preventDefault();
    console.log(searchText);

    // axios
    //   .post("/product/search", { searchItem: searchText })
    //   .then((m) => {
    //     console.log(m.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  return (
    <div className="header">
      <HeaderTogglerMenu />

      <Link to="/" className="headerLink">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="AmazonLogo"
          className="headerLogo"
        />
      </Link>

      <form className="headerSearch" onSubmit={handleSubmitSearch} name="form">
        <input
          type="text"
          className="headerSearchInput"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchIcon
          className="headerSearchIcon"
          role="button"
          type="submit"
          onClick={handleSubmitSearch}
        />
      </form>

      <div className="headerNavbar">
        <img
          src="https://img.icons8.com/color/25/000000/india.png"
          alt="languageIcon"
          className="headerLanguageIcon"
        />
        <Link to="/" className="headerLink">
          <div className="headerNavOption">
            <div className="headerNavText1">
              Hello
              {isLogged ? " " + name : ",Sign In"}
            </div>
            <div className="headerNavText2">Account & Lists</div>
          </div>
        </Link>

        <Link to="/orders" className="headerLink">
          <div className="headerNavOption">
            <div className="headerNavText1">Returns</div>
            <div className="headerNavText2">& Orders</div>
          </div>
        </Link>

        <Link to="/checkout" className="headerLink">
          <div className="headerCart">
            <ShoppingCartIcon className="headerCartIcon" />
            <div className="headerCartItems">{totalItems}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
