import React from "react";

function AddressComponent(props) {
  const deleteAddress = () => {
    console.log("Delete");
  };
  return (
    <div className="addressComponent">
      <div className="addressComponentText">
        {" "}
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

      <a href="/payment/confirm_order">
        <button className="amazonButton">Deliver to this Address</button>
      </a>
      <button className="amazonWhiteButton" onClick={deleteAddress}>
        Delete
      </button>
    </div>
  );
}

export default AddressComponent;
