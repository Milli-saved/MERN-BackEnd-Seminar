const express = require("express");

const app = express();


const port = 4000;
app.listen(4000, () => {
  console.log(`server is started on port ${port}`);
});
