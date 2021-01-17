import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UseStateValue } from "../StateProvider/StateContext";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = UseStateValue().loading;
  const [, setIsLogged] = UseStateValue().isLogged;

  localStorage.removeItem("Payment");

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // console.log("Logging In");
    setError(""); //in case it is second attempt.
    setLoading(true);

    axios
      .post(
        "/api/user/login",
        { email: email, password: pwd },
        { withCredentials: true }
      )
      .then((m) => {
        const errorMsg = m.data.errorMsg;
        if (errorMsg) setError(errorMsg);
        else {
          localStorage.setItem("firstLogin", true);
          setIsLogged(true);
          // console.log("Logging Success");
        }
      })
      .catch((e) => {
        setError("Uh Oh! Some error Occured.");
        console.log(e);
      });
    setLoading(false);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="AmazonLogo"
          className="amazonLogoAuth"
        />
      </Link>
      <form className="loginForm" onSubmit={handleSubmitLogin}>
        <div className="loginBoxHeading">Login</div>
        <div className="loginContainer">
          <label htmlFor="email">
            <b>Email or mobile phone number</b>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            required
          />
          <div className="errorMsgNew"> {error}</div>
          <button
            type="submit"
            className="loginButton amazonButton"
            disabled={loading}
          >
            Login
          </button>
          <div>
            By continuing, you agree to Amazon's{" "}
            <Link to="# ">Conditions of Use</Link> and{" "}
            <Link to="# ">Privacy Notice.</Link>
          </div>
        </div>
      </form>
      <div className="loginNewUserText">
        <span> New to Amazon?</span>{" "}
      </div>
      <Link to="/create-new-account">
        <button className="amazonWhiteButton" disabled={loading}>
          Create your Amazon Account
        </button>
      </Link>
    </div>
  );
}

export default Login;
