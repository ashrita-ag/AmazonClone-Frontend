const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const ERROR = "An Error Occured. Try Again.";
// const DONE = "TaskSuccesful";
const FAIL = "TaskFailed"; //Not found

const app = express();

//To allow CORS (send req from front end to different route)
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/create-new-account", function (req, res) {
  const newUser = new User({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password,
  });

  User.findOne({ email: newUser.email }, function (err, foundUser) {
    if (err) res.send(ERROR);
    else {
      if (foundUser) res.send(FAIL);
      //Email already exists
      else {
        newUser.save(function (e) {
          if (e) res.send(ERROR);
          else res.send(newUser);
        });
      }
    }
  });
});

app.post("/login", function (req, res) {
  const reqemail = req.body.user.email;
  const reqpassword = req.body.user.password;

  User.findOne({ email: reqemail }, function (err, foundUser) {
    if (err) res.send(ERROR);
    else {
      if (foundUser && foundUser.password === reqpassword) res.send(foundUser);
      else res.send(FAIL);
      // res.send(foundUser);
    }
  });
  // res.send("HI");
});

app.listen(5000, function (req, res) {
  console.log("started");
});
