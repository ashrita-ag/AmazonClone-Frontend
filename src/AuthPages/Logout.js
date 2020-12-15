import React from "react";
import axios from "axios";

function Logout() {
  const logout = () => {
    console.log("Logout");
    axios
      .get("/user/logout", { withCredentials: true })
      .then((m) => {
        const err = m.data.err;
        if (err) alert("Some error occured. Try again!");
        else localStorage.removeItem("firstLogin");
        window.location.href = "/";
      })
      .catch((e) => console.log(e));
  };
  return <div>
  <h2>Logging out...</h2>
  {logout()}</div>;
}

export default Logout;
