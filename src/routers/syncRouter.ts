const { Router } = require('express');

const router = Router();


router.get('/', function(req, res) {
    res.send("hello sync!");
});

router.use(function(req,res,next){
    console.log("first middleware in sync router", req.originalUrl);
    next();
    console.log("first middleware in sync router - after next()", req.originalUrl);
})

router.use(function(req,res,next){
    console.log("second middleware in sync router", req.originalUrl);
    next();
    console.log("second middleware in sync router - after next()", req.originalUrl);
})

router.get('/healthz', function(req, res) {
    res.send("ok!");
});

module.exports =  router;
