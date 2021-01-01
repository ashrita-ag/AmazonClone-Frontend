import React, { useEffect } from "react";
import "./OrderHistory.css";
import { UseStateValue } from "../StateProvider/StateContext";
import axios from "axios";

function OrderHistory() {
  const [token] = UseStateValue().token;
  localStorage.setItem("Payment", false);

  useEffect(() => {
    axios
      .get("/order/history", { headers: { Authorization: token } })
      .then((e) => {
        console.log(e.data);
      })
      .catch((e) => console.log(e));
  }, [token]);

  return <div className="orderHistory">
  
    
  </div>;
}

export default OrderHistory;
