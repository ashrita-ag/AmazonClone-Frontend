import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Header from "./Header/Header.js";
import Home from "./HomePage/Home.js";
import Footer from "./Footer";
import Checkout from "./Checkout/Checkout.js";
import Detail from "./ProductDetail/Detail.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/checkout">
            <Checkout />
          </Route>

          <Route exact path="/detail1">
           <Detail />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
