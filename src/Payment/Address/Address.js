import React from "react";
import { UseStateValue } from "../../StateProvider/StateContext";
import SumbitAddressForm from "./SumbitAddressForm";
import AddressComponent from "./AddressComponent";
import Loading from "../../Components/Loading";
import "./Address.css";
const _ = require("lodash");

function Address() {
  localStorage.setItem("Payment", true);
  const [loading] = UseStateValue().loading;
  const [address] = UseStateValue().address;
  const [cart] = UseStateValue().cart;

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

  console.log({ cart });
  return (
    <div className="addressMain">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt="amazonLogo"
        className="addressImg"
      />
      {cart.length > 0 ? (
        <div>
          <h4>Select a delivery address</h4>
          <div className="addressText">
            Is the address you'd like to use displayed below? If so, click the
            corresponding "Deliver to this address" button. Or you can enter a
            new delivery address.
          </div>
          <div className="address">{loading ? <Loading /> : userAddress()}</div>
          {address.length > 0 && <hr />}

          <SumbitAddressForm />
        </div>
      ) : (
        <div>Cart cannot be empty</div>
      )}
    </div>
  );
}

export default Address;
