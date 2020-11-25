import "./NewAcc.css";
import React from "react";

function NewAcc() {
  return (
    <div className="newAcc">
      <a href="/">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c518.png"
          alt="AmazonLogo"
        />
      </a>
      <form className="newAccForm">
        <div className="newAccBoxHeading">Create Account</div>

        <div className="newAccContainer">
          <label htmlFor="name">
            <b>Your name</b>
          </label>
          <input type="text" name="name" required />

          <label htmlFor="phone">
            <b>Mobile number</b>
          </label>
          <input type="text" name="phone" required />

          <label htmlFor="email">
            <b>Email (optional) </b>
          </label>
          <input type="text" name="email" />

          <label htmlFor="pwd">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="pwd"
            placeholder="At least 6 characters"
            required
          />

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
