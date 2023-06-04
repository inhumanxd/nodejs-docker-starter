const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ greeting: "Hello World", ip: req.ip });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server 🚀 started listening to PORT ${PORT}!!`);
});
