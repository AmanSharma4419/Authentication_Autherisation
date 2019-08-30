// requring the express
var express = require("express");

//extracting the routes
var router = express.Router();

//requring the schema model
var User = require("../model/model")

// handling the request of rendring the form

 router.get("/",(req ,res)=> {
     var username = req.user && req.user.name || "Anonymous"
     res.send(`hello ${username}`);
 })


// Exporing the module of route
module.exports = router;