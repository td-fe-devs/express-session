/**
 * 演示路由中间件
 * 1.洋葱模型
 * 2.中间件定义位置的影响
 */
const express = require("express");
const syncRouter = require("./routers/syncRouter.ts");

const app = express();

app.get("/healthz", function (req, res) {
  res.end("ok!");
});

app.use(function (req, res, next) {
  console.log("middleware in root path---", req.originalUrl);
  next();
  console.log("middleware in root path - after next()", req.originalUrl);
});
app.use(function (req, res, next) {
  console.log("middleware in root path---", req.originalUrl);
  next();
  console.log("middleware in root path - after next()", req.originalUrl);
});

app.use("/sync", syncRouter);

app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router);
});
