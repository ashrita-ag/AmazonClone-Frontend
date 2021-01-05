import React from "react";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import { Link } from "react-router-dom";
import axios from "axios";

function AddressComponent(props) {
  const [address, setAddress] = UseStateValue().address;
  const [token] = UseStateValue().token;
  const [, setDeliveryAddress] = UseStateValue().deliveryAddress;

  const handleSetAddress = () => {
    axios
      .post(
        "/delivery/update_address",
        { address: props },
        { headers: { Authorization: token } }
      )
      .then((e) => {
        setDeliveryAddress(e.data.address);
        console.log(e.data);
      })
      .catch((e) => console.log(e));
  };

  const deleteAddress = () => {
    axios
      .post(
        "/address/delete",
        { id: props.id },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((e) => {
        console.log(e.data);
        setAddress(address.filter((a) => a._id !== props.id));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="addressComponent">
      <div className="addressComponentText">
        <div className="addressName">{props.name}</div>
        <div>{props.phone}</div>
        <div>
          {props.house}, {props.area}, {props.landmark}
        </div>
        <div>
          {props.city}, {props.state} {props.pin}
        </div>
        <div>{props.country}</div>
      </div>

      <Link to="/payment/confirm_order">
        <button className="amazonButton" onClick={handleSetAddress}>
          Deliver to this Address
        </button>
      </Link>
      <button className="amazonWhiteButton" onClick={deleteAddress}>
        Delete
      </button>
    </div>
  );
}

export default AddressComponent;
