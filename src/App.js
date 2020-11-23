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

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />

        <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/like-new-products" component={NewProducts} />
          <Route exact path="/home-office" component={HomeOffice} />
          <Route exact path="/additional-items" component={AddProducts} />
          <Route exact path="/checkout" component={Checkout} />

        </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
