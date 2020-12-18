import axios from "axios";
import React, { useState, useEffect } from "react";
import { UseStateValue } from "../StateProvider/StateContext";
import AddressComponent from "./AddressComponent";
import "./Address.css";
const _ = require("lodash");

function Address() {
  const [token] = UseStateValue().token;
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState([false]);

  // const showAddress = (addresses) =>
  useEffect(() => {
    setLoading(true);

    axios
      .get("/address/show", { headers: { Authorization: token } })
      .then((e) => {
        var userAddress = [];
        userAddress = _.toArray(e.data).map((a) => {
          return (
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
          );
        });

        setAddresses(userAddress);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [token]);

  // console.log(addresses);
  // console.log(loading);

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
      <div className="address">{loading ? <h1>Loading</h1> : addresses}</div>
      
    </div>
  );
}

export default Address;
