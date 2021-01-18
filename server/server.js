const express = require("express");
const app = express();

const hostname = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3001;

const { channels } = require("./src/controllers/channels");

app.get("/", (req, res) => {
  res.send("Just a server!!");
});

app.get("/channels", channels.index);
app.get("/channels/store", channels.store);

app.listen(port, hostname, () => {
  console.log(`Running server at http://${hostname}:${port}`);
});
