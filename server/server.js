require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/dbmodel");
const { middleware } = require("./middleware");

app.use("/", require("./middleware"));

app.use(express.json());
app.use(
  cors({
    credentials: true,
    exposedHeaders: "Authorization",
  })
);

const URI = process.env.MONGO_URI;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log("connected to db")
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/", require("./routes/routers"));

app.listen("3001", () => {
  console.log("server running on port 3001");
});
