/**
 * 打印app._router.stack， 查看中间件的属性
 */
const express = require("express");
const orderRouter = require("./routers/orderRouter.ts");
const app = express();

app.use(function (req, res, next) {
  console.log("first!");
  next();
});

app.use(
  "/test",
  function (req, res, next) {
    console.log("test middleware!");
    next();
  },
  function (req, res, next) {
    next();
  }
);

app.use(function (req, res) {
  console.log("test middleware!");
});

app.use("/hello", function (req, res) {
  res.send("hello");
});

app.use("/orders", orderRouter);

app.use(orderRouter);

app.get("/test", function (req, res, next) {
  next();
});

app.get("/hello", function (req, res) {
  console.log("hello");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router.stack);
});
