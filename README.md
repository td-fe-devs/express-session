    lib/
    |
    | - middleware/     中间件相关
    |   | - init.js     初始化request, response
    |   | - query.js    格式化url, 将url中的request参数剥离存储到req.query
    | - route/          路由相关
    |   | - index.js    Router类，存储中间件数组
    |   | - layer.js    中间件实体类
    |   | - route.js    route类，用于处理不同method
    |
    | - application.js  对外API
    | - express.js      入口
    | - request.js      请求增强
    | - response.js     返回增强
    | - util.js         工具函数
    | - view.js         模板相关

