import React, { useEffect } from "react";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext";

function Logout() {
  localStorage.setItem("Payment", false);
  const [, setIsLogged] = UseStateValue().isLogged;
  const [, setLoading] = UseStateValue().loading;

  useEffect(() => {
    console.log("Logging Out");
    setLoading(true);
    const logout = () => {
      axios
        .get("/user/logout", { withCredentials: true })
        .then((m) => {
          const err = m.data.err;
          if (err) alert("Some error occured. Try again!");
          else {
            localStorage.removeItem("firstLogin");
            setIsLogged(false);
          }
        })
        .catch((e) => console.log(e));
    };
    logout();
    setLoading(false);
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
