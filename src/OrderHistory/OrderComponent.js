import React from "react";
import "./OrderComponent.css";
import OrderItems from "./OrderItems";

function OrderComponent(props) {
  const finalAddressOrder = () => {
    const { house, area, landmark, city, pin } = props.deliveryAddress;
    return (
      <div>
        Deliver to :<br />
        {house},{area}, {landmark}
        <br />
        {city} {pin}
      </div>
    );
  };

  console.log(props.date);
  const newDate = new Date(props.date);
  console.log({ newDate });
  const dateString = newDate.toDateString(newDate);
  const test = newDate.toLocaleDateString(newDate);

  return (
    <div>
    <h6>Ordered on : {dateString}</h6>
      <div className="orderComponent">
        <div className="orderComponentHeader">
          <div className="orderComponentHeaderItem">
            TOTAL :<br /> &#8377;{props.total}.00
          </div>
          <div className="orderComponentHeaderItem">
            SHIP TO :<br />
            {props.name}
          </div>
          <div className="orderComponentHeaderItemDetail">
            ORDER NUMBER : <br />#{props._id}{" "}
          </div>
        </div>
        {props.gift && (
          <div className="orderComponentGift">This order contains a gift.</div>
        )}
        <div className="orderComponentContainer">
          <div className="orderComponentContainerLeft">
            {props.cart.map((i) => (
              <OrderItems
                key={i._id}
                img={i.imageUrl}
                heading={i.title}
                count={i.count}
                price={i.price}
              />
            ))}
          </div>
          <div className="orderComponentContainerRight">
            {finalAddressOrder()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderComponent;
