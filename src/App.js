import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Header/Header.js";
import Footer from "./Footer";

import Home from "./HomePage/Home.js";
import AddProducts from "./HomeProductLinks/AddProducts/AddProducts.js";
import HomeOffice from "./HomeProductLinks/HomeOffice/HomeOffice.js";
import NewProducts from "./HomeProductLinks/NewProducts/NewProducts.js";
import Checkout from "./Checkout/Checkout.js";
import Login from "./LoginPage/Login.js";
import NewAcc from "./CreateAccount/NewAcc";

function App() {
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
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/create-new-account">
              <NewAcc />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
