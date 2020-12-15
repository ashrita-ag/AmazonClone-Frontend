import React from "react";
import "./HomeGridItem.css";
import HomesigninBox from "./signinBox.js";
import {UseStateValue} from "../StateProvider/StateContext.js" 
import HomesignoutBox from './HomesignoutBox.js'

function HomeGridItem() {
  const [isLogged]   = UseStateValue().isLogged;

  return (
    <div className="homeGridItem">
      {!isLogged?<HomesigninBox />:<HomesignoutBox/>}

      <div className="homeGridItemImage">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/61hwdcuuW%2BL._SL1000_.jpg"
          alt="homeGridItemImage"
        />
      </div>
    </div>
  );
}

export default HomeGridItem;
