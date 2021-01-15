import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import { UseStateValue } from "./StateProvider/StateContext";

// Components
import Header from "./HeaderFooter/Header.js";
import Footer from "./HeaderFooter/Footer";
import Search from "./HeaderFooter/Search";
import Home from "./HomePage/Home.js";
import AddProducts from "./ProductLink/AddProducts/AddProducts.js";
import HomeOffice from "./ProductLink/HomeOffice/HomeOffice.js";
import NewProducts from "./ProductLink/NewProducts/NewProducts.js";
import Checkout from "./Checkout/Checkout.js";
import Login from "./AuthPages/Login.js";
import NewAcc from "./AuthPages/NewAcc";
import Logout from "./AuthPages/Logout.js";
import Address from "./Payment/Address/Address";
import ConfirmOrder from "./Payment/ConfirmOrder/ConfirmOrder";
import PlaceOrder from "./Payment/PlaceOrder/PlaceOrder";
import Method from "./Payment/Method/Method";
import OrderHistory from "./OrderHistory/OrderHistory";

function App() {
  const [isLogged] = UseStateValue().isLogged;

  return (
    <Router basename="/">
      <div className="app">
        <div id="overlay"></div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/search">
              <Header />
              <Search />
            </Route>

            <Route exact path="/like-new-products">
              <Header />
              <NewProducts />
            </Route>
            <Route exact path="/home-office">
              <Header />
              <HomeOffice />
            </Route>
            <Route exact path="/additional-items">
              <Header />
              <AddProducts />
            </Route>
            <Route exact path="/checkout">
              <Header />
              <Checkout />
            </Route>

            {/* AuthPages Start */}
            <Route exact path="/login">
              {isLogged ? <Redirect to="/" /> : <Login />}
            </Route>
            <Route exact path="/create-new-account">
              {isLogged ? <Redirect to="/" /> : <NewAcc />}
            </Route>
            <Route exact path="/logout">
              <Header />
              {isLogged ? <Logout /> : <Redirect to="/" />}
            </Route>
            {/* AuthPages End */}

            {/* PaymentPages Start */}
            <Route exact path="/payment/address">
              <Address />
            </Route>
            <Route exact path="/payment/confirm_order">
              <ConfirmOrder />
            </Route>
            <Route exact path="/payment/place_order">
              <PlaceOrder />
            </Route>
            <Route exact path="/payment/method">
              <Method />
            </Route>
            {/* PaymentPages End */}

            <Route exact path="/orders">
              <Header />
              <OrderHistory />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
