import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext";

function Logout() {
  localStorage.removeItem("Payment");
  const [, setIsLogged] = UseStateValue().isLogged;
  const [error, setError] = useState("Redirecting to HomePage");

  useEffect(() => {
    // console.log("Logging Out");
    const logout = () => {
      axios
        .get("/user/logout", { withCredentials: true })
        .then((m) => {
          const errorMsg = m.data.errorMsg;
          if (errorMsg) setError("Some error occured. Refresh to try again!");
          else {
            localStorage.removeItem("firstLogin");
            setIsLogged(false);
          }
        })
        .catch((e) => {
          console.log(e);
          setError("Some error occured. Refresh to try again!");
        });
    };
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
      <div>{error}</div>
    </div>
  );
}

export default Logout;
