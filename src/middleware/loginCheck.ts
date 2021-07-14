module .exports = function (req, res, next) {
    const { user } = req.query;

    console.log('-----------login check middleware-------------');
    // todo: 判断用户是否登录
    if (!!user) {
        next();
    } else {
        throw new Error('please goto login');
    }
}