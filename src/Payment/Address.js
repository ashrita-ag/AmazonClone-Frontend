// import axios from "axios";
import React from "react";
import { UseStateValue } from "../StateProvider/StateContext";
import AddressComponent from "./AddressComponent";
import "./Address.css";
const _ = require("lodash");

function Address() {
  // const [token] = UseStateValue().token;
  const [address] = UseStateValue().address;
  // const [loading, setLoading] = useState([false]);
  // const [showAddress, setShowAddress] = useState([]);

  // useEffect(() => {
  //   console.log("pageLoaded");
  //   var userAddress = [];
  //   setLoading(true);
  const userAddress = () =>
    _.toArray(address).map((a) => (
      <AddressComponent
        key={a._id || 1}
        id={a._id}
        country={a.country}
        name={a.name}
        phone={a.phone}
        house={a.house}
        area={a.area}
        pin={a.pin}
        landmark={a.landmark}
        city={a.city}
        state={a.state}
      />
    ));
  //   });
  //   setShowAddress(userAddress);
  //   setLoading(false);
  // }, [address]);

  return (
    <div className="addressMain">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt="amazonLogo"
      />
      <h4>Select a delivery address</h4>
      <div className="addressText">
        Is the address you'd like to use displayed below? If so, click the
        corresponding "Deliver to this address" button. Or you can enter a new
        delivery address.
      </div>
      <div className="address">{userAddress()}</div>
    </div>
  );
}

export default Address;
