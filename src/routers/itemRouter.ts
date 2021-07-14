const { Router } = require('express');

const itemRouter = Router();

itemRouter.get('/', function(req, res) {
    res.send("item list!");
}).get('/:id', function(req, res) {
    res.send("item detail!")
})

module.exports =  itemRouter;