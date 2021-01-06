import React from "react";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext";

function Logout() {
  localStorage.setItem("Payment", false);
  const [, setIsLogged] = UseStateValue().isLogged;

  const logout = () => {
    console.log("Logging Out");
    axios
      .get("/user/logout", { withCredentials: true })
      .then((m) => {
        const err = m.data.err;
        if (err) alert("Some error occured. Try again!");
        else {
          localStorage.removeItem("firstLogin");
          setIsLogged(false);
        }
        window.location.href = "/";
      })
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Logging out...</h2>
      {logout()}
    </div>
  );
}

export default Logout;
