/**
 * 演示错误处理中间件
 */
const express = require("express");

const app = express();

function getAsyncResult() {
  return Promise.resolve(true);
}
app.use(async function (req, res, next) {
  const result = await getAsyncResult();
  if (!result) {
    console.log("async result is true");
    return next();
  }
  next("async result is false");
});
app.get("/user", function (req, res) {
  res.send("user info!");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
});
