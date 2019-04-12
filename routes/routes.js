var express = require('express')
var router = express.Router()

router.get('/', function(req, res, next){
    res.json({'message':'Hello everyone!'})
})

router.get('/cat', function(req, res, next){
    res.json({'message':'Meow!'})
})

module.exports = router
/*like return function. it will return router when called in server.js*/