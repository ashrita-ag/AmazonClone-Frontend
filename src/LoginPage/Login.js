import "./Login.css";

import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePwd = (e) => {
    setPwd(e.target.value);
  };

  // console.log(email+" "+pwd);

  return (
    <div className="login">
      <a href="/">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          alt="AmazonLogo"
        />
      </a>

      <form className="loginForm">
        <div className="loginBoxHeading">Login</div>

        <div className="loginContainer">
          <label htmlFor="email">
            <b>Email or mobile phone number</b>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={changeEmail}
            required
          />
          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={changePwd}
            required
          />
          <button type="submit" className="loginButton amazonButton">
            Login
          </button>
          <div>
            By continuing, you agree to Amazon's{" "}
            <a href="# ">Conditions of Use</a> and{" "}
            <a href="# ">Privacy Notice.</a>
          </div>
          {/* <label className="loginRemember">
            <input type="checkbox" name="remember" />
            Remember me
          </label> */}
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
