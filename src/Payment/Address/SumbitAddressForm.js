import React, { useState } from "react";
import "./SumbitAddressForm.css";
import axios from "axios";
import { UseStateValue } from "../../StateProvider/StateContext";

function SumbitAddressForm() {
  const [token] = UseStateValue().token;
  const [address, setAddress] = UseStateValue().address;
  const [loading, setLoading] = UseStateValue().loading;

  const [formAddress, setFormAddress] = useState({
    name: "",
    phone: "",
    pin: "",
    house: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    country: "India",
  });

  const onChangeAddress = (e) => {
    const { name, value } = e.target;
    setFormAddress({ ...formAddress, [name]: value });
  };

  const submitAddress = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(formAddress);
    axios
      .post("/address/save", formAddress, {
        headers: {
          Authorization: token,
        },
      })
      .then((e) => {
        console.log(e.data);
        setAddress([...address, e.data]);
        window.scrollTo(0, 0);
      })
      .catch((e) => console.log(e));
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={submitAddress} className="addressForm">
        <h5>Add a new address</h5>
        <label>Country</label>
        <div className="addressCountry">India</div>
        <label htmlFor="name">Full name (First and Last name)</label>
        <input
          type="text"
          name="name"
          required
          onChange={onChangeAddress}
          placeholder=""
          value={formAddress.name}
          id="name"
        />
        <label htmlFor="phone">Mobile number</label>
        <input
          type="text"
          name="phone"
          required
          onChange={onChangeAddress}
          placeholder="10-digit mobile number without prefixes"
          value={formAddress.phone}
          id="phone"
        />
        <label htmlFor="pin">PIN code</label>
        <input
          type="text"
          name="pin"
          required
          onChange={onChangeAddress}
          placeholder="6 digit [0-9] pincode"
          value={formAddress.pin}
          id="pin"
        />
        <label htmlFor="house">
          Flat, House no., Building, Company, Apartment
        </label>
        <input
          type="text"
          name="house"
          required
          onChange={onChangeAddress}
          placeholder=""
          value={formAddress.house}
          id="house"
        />
        <label htmlFor="area">Area, Colony, Street, Sector, Village</label>
        <input
          type="text"
          name="area"
          required
          onChange={onChangeAddress}
          placeholder=""
          value={formAddress.area}
          id="area"
        />
        <label htmlFor="landmark">Landmark</label>
        <input
          type="text"
          name="landmark"
          onChange={onChangeAddress}
          placeholder="E.g. Near AIIMS Flyover, Near SRS Cinema, etc"
          value={formAddress.landmark}
          id="landmark"
        />
        <label htmlFor="city">Town/City</label>
        <input
          type="text"
          name="city"
          required
          onChange={onChangeAddress}
          placeholder=""
          value={formAddress.city}
          id="city"
        />{" "}
        <label htmlFor="state">State / Province / Region</label>
        <input
          type="text"
          name="state"
          required
          onChange={onChangeAddress}
          placeholder=""
          value={formAddress.state}
          id="state"
        />{" "}
        <button className="amazonButton addressSubmit" type="submit">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
}

export default SumbitAddressForm;
