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

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />

        <div id="overlay"></div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/like-new-products">
              <NewProducts />
            </Route>
            <Route exact path="/home-office">
              <HomeOffice />
            </Route>
            <Route exact path="/additional-items">
              <AddProducts />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
