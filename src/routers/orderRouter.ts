const { Router } = require('express');

/**
 * 模块化的、可装载的 路由处理函数
 */
const orderRouter = Router();

orderRouter.get('/', function(req, res) {
    console.log(`------------orderRouter-----------`, orderRouter);
    res.send("order list!");
}).get('/:id', function(req, res) {
    //req.params {id: 123}
    res.send("order detail!")
})

module.exports =  orderRouter;