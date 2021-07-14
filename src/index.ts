const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("hello world!");
});

// http.createServer(app);
app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router);
});
