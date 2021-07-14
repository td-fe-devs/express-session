/**
 * 1.app[method](path, callback(res, req))
 * 2.app.route().get(callback).post(callback)
 * 3.route paths的三种形式
 */
onst express = require("express");

const app = express();

/********************** app[method](path, callback(res, req))  **************************/
/**
 * 指向 `/user` 的 `get` 请求
 */
app.get("/user", function (req, res) {
  res.send("user info!");
});
/**
 * 指向 `/user` 的 `post` 请求
 */
app.post("/user", function (req, res) {
  res.send("created user!");
});

/************************************ app.route()  ***************************************/
/**
 * 针对特定path的可链接的路由处理函数
 */
app
  .route("/test")
  .get(function (req, res) {
    res.send("test info");
  })
  .post(function (req, res) {
    res.send("Add a test");
  })
  .put(function (req, res) {
    res.send("Update the test");
  });

/************************************ route path  ***************************************/
/**
 * route paths based on string patterns.
 * 指向`/acd` 或 `/abcd` 的 `get` 请求
 */
app.get("/ab?cd", function (req, res) {
  res.send("ab?cd");
});
/**
 * route paths based on regular expressions
 * 任何包含字母 `a` 的 `get` 请求
 */
app.get(/a/, function (req, res) {
  res.send("/a/");
});

app.get(/abc/, function (req, res) {
  res.send("/a/");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
  console.log(app._router);
});
