import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { UseStateValue } from "../StateProvider/StateContext";
import axios from "axios";
import OrderComponent from "./OrderComponent";

function OrderHistory() {
  const [token] = UseStateValue().token;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState([false]);

  localStorage.setItem("Payment", false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/order/history", { headers: { Authorization: token } })
      .then((e) => {
        console.log(e.data);
        var data = [];
        data = e.data.map((i) => {
          return (
            <OrderComponent
              key={i._id}
              cart={i.cart}
              _id={i._id}
              total={i.finalcost}
              gift={i.gift}
              name={i.address.name}
              deliveryAddress={i.address}
              date={i.updatedAt}
            />
          );
        });
        setOrders(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [token]);

  return (
    <div className="orderHistory">
      <h4 className="orderHistoryHeading">Your Orders</h4>
      {loading ? <h1>Loading...</h1> : orders}
    </div>
  );
}

export default OrderHistory;
