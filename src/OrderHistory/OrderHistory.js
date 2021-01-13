import React, { useEffect, useState } from "react";
import "./OrderHistory.css";
import { UseStateValue } from "../StateProvider/StateContext";
import axios from "axios";
import OrderComponent from "./OrderComponent";
import Loading from "../Components/Loading";

function OrderHistory() {
  const [token] = UseStateValue().token;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  localStorage.removeItem("Payment");

  useEffect(() => {
    setLoading(true);
    setError("");
    axios
      .get("/order/history", { headers: { Authorization: token } })
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError(errorMsg);
        else {
          console.log(m.data);
          var data = [];
          data = m.data.map((i) => {
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
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
    setLoading(false);
  }, [token]);

  return (
    <div className="orderHistory">
      <h4 className="orderHistoryHeading">Your Orders</h4>
      <div className="errorMsgNew"> {error}</div>
      {loading ? <Loading /> : orders}
      {orders.length === 0 && <div>No orders to display</div>}
    </div>
  );
}

export default OrderHistory;
