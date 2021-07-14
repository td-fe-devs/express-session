/**
 * 1.app.use(path, router)
 * 2.route handlers
 * 3.app.use(path, callback(res, req))
 * 4.app.all(path, callback(res, req))
 *
 */
const express = require("express");
const orderRouter = require("./routers/orderRouter.ts");
const itemRouter = require("./routers/itemRouter.ts");

const app = express();

/****************************** app.use(path, router)  ******************************/
/**
 * different paths are divided into different modules
 * 路由中间件系统
 */
app.use("/orders", orderRouter);
app.use("/items", itemRouter);

/********************************** Route handlers ********************************/
function callbackFirst(req, res, next) {
  console.log("the first callback!");
  next();
}
function callbackSecond(req, res, next) {
  console.log("the second callback!");
  next();
}
function callbackFinally(req, res, next) {
  console.log("the last callback!");
  res.send("OK!");
}

app.use("/testCallback", callbackFirst, callbackSecond, callbackFinally);
app.get("/testCallback1", [callbackFirst, callbackSecond, callbackFinally]);
app.get("/testCallback2", [callbackFirst, callbackSecond], function (req, res) {
  res.end("haha~");
});

/************************** app.use(path, callback(res, req)) ************************/
/**
 * 指向 '/item' 的任何 method (get, post, put, delete...)
 */
app.use("/item", function (req, res) {
  res.send("item info!");
});
app.all("/todo", function (req, res) {
  res.send("todo info!");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router.stack);
});
