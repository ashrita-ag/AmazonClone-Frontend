import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer,{initialState} from "./StateProvider/reducer.js"
import {CartProvider} from "./StateProvider/CartContext.js"

ReactDOM.render(
  <CartProvider initialState={initialState} reducer={reducer}>
    <App />
  </CartProvider>,
  document.getElementById("root")
);

reportWebVitals();
