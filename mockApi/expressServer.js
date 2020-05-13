require("dotenv").config();
const bodyParser = require("body-parser");

const express = require("express")();
const port = process.env.EXPRESS_PORT;

express.get("/", (res, req) => {
  res.send("Hello");
});

express.listen(port, () => {
  console.log(`Mock(JSON) Server is running on port: ${port}`);
});
