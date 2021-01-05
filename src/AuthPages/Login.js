import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  localStorage.setItem("Payment", false);

  const changeErrorMsgNew = (error) => {
    setErrorMsg(error);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios
      .post(
        "/user/login",
        {
          email: email,
          password: pwd,
        },
        {
          withCredentials: true,
        }
      )
      .then((m) => {
        const msg = m.data.msg;
        if (msg) changeErrorMsgNew(msg);
        else {
          localStorage.setItem("firstLogin", true);

          window.location.href = "/";
          console.log("login");
        }
      })
      .catch(() => changeErrorMsgNew("Some error oocured. Try again."));
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
          <div className="errorMsgNew"> {errorMsg}</div>
          <button type="submit" className="loginButton amazonButton">
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
        <button className="amazonWhiteButton">
          Create your Amazon Account
        </button>
      </Link>
    </div>
  );
}

export default Login;
