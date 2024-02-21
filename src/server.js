const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.json({ message: "you're at the root" });
});

module.exports = app;
