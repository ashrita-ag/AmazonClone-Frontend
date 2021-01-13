import React from "react";
import { UseStateValue } from "../../StateProvider/StateContext.js";
import { Link } from "react-router-dom";
import axios from "axios";

function AddressComponent(props) {
  const [address, setAddress] = UseStateValue().address;
  const [token] = UseStateValue().token;
  const [, setDeliveryAddress] = UseStateValue().deliveryAddress;
  const [loading, setLoading] = UseStateValue().loading;
  const [gift, setGift] = UseStateValue().gift;
  const [, setCost] = UseStateValue().cost;
  const [, setFinalCost] = UseStateValue().finalCost;
  const [, setCart] = UseStateValue().cart;

  const handleSetAddress = () => {
    setLoading(true);
    axios
      .post(
        "/delivery/update_address",
        { address: props, gift: gift },
        { headers: { Authorization: token } }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) alert(errorMsg);
        else {
          setDeliveryAddress(m.data.address);
          setFinalCost(m.data.finalcost);
          setCost(m.data.cost);
          setCart(m.data.cart);
          setGift(m.data.gift);
          console.log(m.data);
        }
      })
      .catch((e) => {
        alert("Some error oocured. Try again.");
        console.log(e);
      });
    setLoading(false);
  };

  const deleteAddress = () => {
    setLoading(true);
    axios
      .patch(
        "/address/delete",
        { id: props.id },
        {
          headers: {
            Authorization: token,
          },
        }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) alert(errorMsg);
        else {
          console.log(m.data);
          setAddress(address.filter((a) => a._id !== props.id));
        }
      })
      .catch((e) => {
        alert("Some error oocured. Try again.");
        console.log(e);
      });
    setLoading(false);
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
        <button
          className="amazonButton"
          onClick={handleSetAddress}
          disabled={loading}
        >
          Deliver to this Address
        </button>
      </Link>
      <button
        className="amazonWhiteButton"
        onClick={deleteAddress}
        disabled={loading}
      >
        Delete
      </button>
    </div>
  );
}

export default AddressComponent;
