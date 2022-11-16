const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Connection with the database

mongoose
  .connect("mongodb://127.0.0.1:27017/zoo")
  .then(() => {
    console.log("Connected to database zoo");
  })
  .catch((err) => console.log("error while connecting to the database", err));

// MIDDLEWARES
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res, next) => {
  console.log("first get function.");
});

app.post("/p", (req, res) => {
  let data = req.body.hello;
  res.status(200).json({
    status: "success",
    data,
  });
});

const port = 4000;
app.listen(4000, () => {
  console.log(`server is started on port ${port}`);
});
