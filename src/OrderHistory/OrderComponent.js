import React from "react";
import "./OrderComponent.css";
import OrderItems from "./OrderItems";

function OrderComponent(props) {
  return (
    <div className="orderComponent">
      <div className="orderComponentHeader">
        <div className="orderComponentOrderNumber">
          Order Number : #{props._id}
        </div>
        <div className="orderComponentTotal">Order Total : {props.total}</div>
      </div>
      {props.gift && (
        <div className="orderComponentGift">This order contains a gift</div>
      )}
      <div className="orderComponentContainer">
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
    </div>
  );
}

export default OrderComponent;
