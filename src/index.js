const express = require("express");
const { get } = require("mongoose");

const app = express();

app.get("/", (req, res, next) => {
  console.log("first get function.");
});

const port = 4000;
app.listen(4000, () => {
  console.log(`server is started on port ${port}`);
});
