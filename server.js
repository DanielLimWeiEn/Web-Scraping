const express = require("express");
const bot = require("./bot.js");

const app = express();

app.get("/", async (req, res) => {
  const response = await bot();
  res.send(response);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Listening on port ${PORT}`);
})
