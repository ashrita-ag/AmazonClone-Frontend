import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const changeErrorMsgNew = (error) => {
    setErrorMsg(error);
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: pwd,
    }
    const message = await axios.post("http://localhost:5000/users/login",user); 
    console.log(message.data);    
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
          <div className="loginErrorMsg">{errorMsg}</div>
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
