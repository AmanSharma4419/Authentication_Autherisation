//require express
var express = require("express");
//extractiong the route from express
var router = express.Router();
//requring the usermodel
var User = require("../model/model")
//handling the route for user route
router.get("/",(req,res, next) => {
    User.find({},(err, data) =>{
        console.log(err, data);
        if(err) return next(err);
        res.json(data)
    }) 
});

// router.get('/login')
//exporting the route
module.exports = router;