/**
 * 演示中间件的基本用法
 */
const express = require("express");

const loginCheck = require("./middleware/loginCheck.ts");

const app = express();

/**
 * 自定义中间件
 * 没有挂载路径的中间件，每个请求都会执行该中间件
 */
app.use(function (req, res, next) {
  console.log("-------------------------------------------");
  console.log(`--------------${req.originalUrl}-----------`);
  console.log("-------------------------------------------");
  next();
});

app.get("/healthz", function (req, res) {
  res.end("ok!");
});
/**
 * app.use 分发路由，任何method(get, post, delete...)都执行同一个callback
 */
app.use("/login", function (req, res) {
  const { user } = req.query;
  if (!!user) {
    // todo: 用户用户名密码校验等
    res.end("login success!");
  } else {
    res.end("please input username and password!");
  }
});

app.use(loginCheck);

/**
 * 挂载到特定路径的中间件，任何指向该路径的请求都会执行该中间件
 */
app.use("/myCart", function (req, res, next) {
  console.log("/myCart middleware");
  next();
});
app.use("/myCart", function (req, res, next) {
  console.log("/myCart middleware2");
  next();
});
app.get("/myCart", function (req, res) {
  res.end("in my cart");
});
/**
 * 中间件系统，指向`/orders`的`get`方法指向该中间件
 * 使用具体method定义中间件系统，path不可少
 */
app.post("/orders", function (req, res, next) {
  console.log("/orders 的 get 方法 中间件");
  next();
});
app.use("/orders", function (req, res) {
  res.end("my orders");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router);
});
