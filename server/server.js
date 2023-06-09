const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
// const flash = require("express-flash");
// const logger = require("morgan");
const connectDB = require("./config/database");
// const mainRoutes = require("./routes/main");
const todoRoutes = require("./routes/todos");

require("dotenv").config({ path: "./config/.env" });

// Passport config
// require("./config/passport")(passport);

connectDB();

// app.set("view engine", "ejs");
app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
 next();
});

app.use(
 cors({
  origin: "*",
  methods: ["POST", "PUT", "GET", "DELETE"],
  allowedHeaders: ["Content-Type"],
 })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(logger("dev"));

// Sessions

app.use(
 session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
   mongoUrl: process.env.DB_STRING,
   mongooseConnection: mongoose.connection,
  }),
 })
);

// Passport middleware
// app.use(passport.initialize());
// app.use(passport.session());

// app.use(flash());

// app.use("/", mainRoutes);
app.use("/", todoRoutes);

app.listen(process.env.PORT, () => {
 console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
