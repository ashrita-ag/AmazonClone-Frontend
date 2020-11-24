import "./Login.css";

import React from "react";
function Login() {
  return (
    <div className="login">
       <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          alt="AmazonLogo"
        />

      <form className="loginForm" action="/">
        <div className="loginBoxHeading">Login</div>

        <div className="loginContainer">
          <label for="email">     <b>Email or mobile phone number</b>          </label>
          <input
            type="text"
            name="email"
            required
          />

          <label for="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="pwd"
            required
          />

          <button type="submit" className="loginButton amazonButton">Login</button>
          <div>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
          <label className="loginRemember">
            <input type="checkbox" name="remember" /> 
            Remember me
          </label>
        </div>
      </form>
    </div>
  );
}

export default Login;
