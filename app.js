const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Azure");
});

app.listen(8080, () => {
  console.log("Server On");
});
