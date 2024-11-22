const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const expressSession = require("express-session");
const passport = require("passport");

require("dotenv").config();
const connectToDb = require("./config/db-connection");
connectToDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./config/googleStrategy");

app.use("/auth", authRouter);

app.listen(3000);
