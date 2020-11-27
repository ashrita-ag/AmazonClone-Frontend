import "./NewAcc.css";
import axios from "../axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ERROR = "ErrorOccured";
// const DONE = "TaskSuccesful";
const FAIL = "TaskFailed"; //Not found

function NewAcc() {
  const history = useHistory();
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");

  const changeErrorMsgNew = (error) => {
    setErrorMsg(error);
  };

  const handleSubmitNew = async (e) => {
    e.preventDefault();

    const user = {
      name: name,
      email: email,
      password: pwd,
    };

    const message = await axios.post("/create-new-account", { user });
    if (message.data === ERROR || message.data === FAIL)
      changeErrorMsgNew(message.data);
    else history.goBack();
  };

  return (
    <div className="newAcc">
      <a href="/">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          alt="AmazonLogo"
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
