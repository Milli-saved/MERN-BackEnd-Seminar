const express = require("express");
const cors = require("cors");

const app = express();

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
