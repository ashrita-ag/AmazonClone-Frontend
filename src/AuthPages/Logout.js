import React, { useEffect } from "react";
import { UseStateValue } from "../StateProvider/StateContext";

function Logout() {
  localStorage.removeItem("Payment");
  const [, setIsLogged] = UseStateValue().isLogged;
  const [, setToken] = UseStateValue().token;

  useEffect(() => {
    const logout = () => {
      localStorage.removeItem("firstLogin");
      setIsLogged(false);
      setToken(null);
      localStorage.removeItem("refreshtoken");
    };
    logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
      <div>Redirecting to HomePage</div>
    </div>
  );
}

export default Logout;
