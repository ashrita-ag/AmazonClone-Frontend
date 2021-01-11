import React, { useEffect } from "react";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext";

function Logout() {
   localStorage.removeItem("Payment")
  const [, setIsLogged] = UseStateValue().isLogged;
  const [, setLoading] = UseStateValue().loading;

  useEffect(() => {
    console.log("Logging Out");
    setLoading(true);
    const logout = () => {
      axios
        .get("/user/logout", { withCredentials: true })
        .then((m) => {
          const errorMsg = m.data.errorMsg;
          if (errorMsg) alert("Some error occured. Try again!");
          else {
            localStorage.removeItem("firstLogin");
            setIsLogged(false);
          }
        })
        .catch((e) => {
          console.log(e);
          alert("Some error occured. Try again!");
        });
    };
    logout();
    setLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}

export default Logout;
