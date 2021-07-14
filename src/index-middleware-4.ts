/**
 * 演示有异步逻辑的中间件
 */
const express = require("express");

const app = express();

const sleep = () =>
  new Promise((resolve) =>
    setTimeout(function () {
      resolve(1);
    }, 2000)
  );

function f1(req, res, next) {
  console.log("f1 start ->");
  next();
  console.log("f1 end <-");
}

function f2(req, res, next) {
  console.log("f2 start ->");
  next();
  console.log("f2 end <-");
}

async function f3(req, res, next) {
  // await sleep();
  console.log("f3 service...");
  next();
}

app.use(f1);
app.use(f2);
app.use(f3);
app.get("/", function (req, res) {
  console.log("path logic!");
  res.send("Hello World!");
});

app.listen(8080, function () {
  console.log("server listening on 8080...");
});

/**

 f1 (req, res) {
  console.log('f1 start ->');
  f2 (req, res) { // 第一个 next() 地方
    console.log('f2 start ->');
    async f3 (req, res) { // 第二个 next() 地方
      await sleep(); // 改变之处
      console.log('f3 service...');
      res.send('Hello World!')
    }
    console.log('f2 end <-');
  }
  console.log('f1 end <-');
}

 */
