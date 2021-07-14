/**
 * 第三方中间件cookieParser
 */
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser);

app.get("/healthz", function (req, res) {
  res.end("ok!");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
});
