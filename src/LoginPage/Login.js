import "./Login.css";
import { useHistory } from "react-router-dom";
// import { UseStateValue } from "../StateProvider/StateContext.js";
// import { LoginSuccess } from "../ActionType";

import React, { useState } from "react";
const axios = require("axios");

function Login() {
  const history = useHistory();
  // const [, dispatch] = UseStateValue();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const changeErrorMsgNew = (error) => {
    setErrorMsg(error);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/user/login", {
        email: email,
        password: pwd,
      })
      .then((m) => {
        const msg = m.data.msg;
        if (msg) changeErrorMsgNew(msg);
        else {
          // const accesstoken = m.data.accesstoken;

          // axios
          //   .get("http://localhost:5000/user/info", {
          //     headers: { Authorization: accesstoken },
          //   })
          //   .then((res) => {
          localStorage.setItem("firstLogin", true);

          // dispatch({
          //   type: LoginSuccess,
          //   user: {
          //     name: res.Fname,
          //     email: res.email,
          //     cart: res.cart,
          //   },
          // });
          // })
          // .catch((e) => console.log(e));
          history.push("/");
        }
      })
      .catch(() => changeErrorMsgNew("Some error oocured. Try again."));
  };

  return (
    <div className="login">
      <a href="/">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          alt="AmazonLogo"
        />
      </a>

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
            <a href="# ">Conditions of Use</a> and{" "}
            <a href="# ">Privacy Notice.</a>
          </div>
        </div>
      </form>
      <div className="loginNewUserText">
        <span> New to Amazon?</span>{" "}
      </div>
      <a href="/create-new-account">
        <button className="newUserButton">Create your Amazon Account</button>
      </a>
    </div>
  );
}

export default Login;
