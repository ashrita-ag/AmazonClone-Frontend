import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Header/Header.js";
import Home from "./HomePage/Home.js";
import Footer from "./Footer";
// import Checkout from "./Checkout/Checkout.js";

import AddProducts from "./HomeProductLinks/AddProducts/AddProducts.js";
import HomeOffice from "./HomeProductLinks/HomeOffice/HomeOffice.js";
import NewProducts from "./HomeProductLinks/NewProducts/NewProducts.js";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route exact path="/checkout">
            <Checkout />
          </Route> */}

          <Route exact path="/like-new-products">
            <NewProducts />
          </Route>

          <Route exact path="/home-office">
            <HomeOffice />
          </Route>

          <Route exact path="/additional-items">
            <AddProducts />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
