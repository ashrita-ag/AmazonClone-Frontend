import "./NewAcc.css";
import React, { useState } from "react";
const axios = require("axios");

function NewAcc() {
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const changeErrorMsgNew = (error) => {
    setErrorMsg(error);
  };

  const handleSubmitNew = (e) => {
    e.preventDefault();

    axios
      .post(
        "/user/register",
        {
          name: name,
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
          console.log("New Account");
        }
      })
      .catch(() => changeErrorMsgNew("Some error oocured. Try again."));
  };

  return (
    <div className="newAcc">
      <a href="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png"
          alt="AmazonLogo"
          className="amazonLogoAuth"
        />
      </a>
      <form className="newAccForm" onSubmit={handleSubmitNew}>
        <div className="newAccBoxHeading">Create Account</div>

        <div className="newAccContainer">
          <label htmlFor="name">
            <b>Your name</b>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          {/* <label htmlFor="phone">
            <b>Mobile number</b>
          </label>
          <input type="text" name="phone" required /> */}

          <label htmlFor="email">
            <b>Email (optional)</b>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="pwd"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="At least 6 characters"
            required
          />

          <div className="errorMsgNew"> {errorMsg}</div>

          <button type="submit" className="newAccButton amazonButton">
            Create your Amazon Account
          </button>

          <div className="newAccText">
            Already have an account? <a href="/login">Sign in &#9656;</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewAcc;
