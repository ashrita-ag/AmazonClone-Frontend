import React, { useEffect, useState } from "react";
import { UseStateValue } from "../../StateProvider/StateContext";
import SumbitAddressForm from "./SumbitAddressForm";
import AddressComponent from "./AddressComponent";

import "./Address.css";
import axios from "axios";
const _ = require("lodash");

function Address() {
  localStorage.setItem("Payment", true);
  // const [loading, setLoading] = useState(false);
  // const [userAddress, setUserAddress] = useState([]);

  const [address] = UseStateValue().address;
  const [token] = UseStateValue().token;
  const [gift, setGift] = UseStateValue().gift;
  const [, setCost] = UseStateValue().cost;
  const [, setFinalCost] = UseStateValue().finalCost;
  const [, setCart] = UseStateValue().cart;

  useEffect(() => {
    if (token) {
      console.log("Creating Delivery Model");
      // const g = localStorage.getItem("Gift");
      console.log({ gift });
      axios
        .post(
          "/delivery/create",
          { gift: gift },
          { headers: { Authorization: token } }
        )
        .then((e) => {
          console.log(e.data);
          setFinalCost(e.data.finalcost);
          setCost(e.data.cost);
          setCart(e.data.cart);
          setGift(e.data.gift);
        })
        .catch((e) => console.log(e));
    }
  }, [token]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("/address/show", { headers: { Authorization: token } })
  //     .then((e) => {
  //       var data = [];
  //       console.log("address");
  //       data = e.data.map((a) => (
  //         <AddressComponent
  //           key={a._id || 1}
  //           id={a._id}
  //           country={a.country}
  //           name={a.name}
  //           phone={a.phone}
  //           house={a.house}
  //           area={a.area}
  //           pin={a.pin}
  //           landmark={a.landmark}
  //           city={a.city}
  //           state={a.state}
  //         />
  //       ));
  //       setUserAddress(data);
  //       setLoading(false);
  //     })
  //     .catch((e) => console.log(e));
  // }, [token]);

  const userAddress = () =>
    address.length === 0 ? (
      <div className="noAddress">
        <h3>No Saved Addresses</h3>
        <div className="addressText">Please add a new Address.</div>
      </div>
    ) : (
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
      ))
    );

  return (
    <div className="addressMain">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt="amazonLogo"
        className="addressImg"
      />
      <h4>Select a delivery address</h4>
      <div className="addressText">
        Is the address you'd like to use displayed below? If so, click the
        corresponding "Deliver to this address" button. Or you can enter a new
        delivery address.
      </div>
      <div className="address">
        {userAddress()}
        {/* {loading ? <h1>Loading</h1> : userAddress} */}
      </div>
      {address.length > 0 && <hr />}

      <SumbitAddressForm />
    </div>
  );
}

export default Address;
