// requring the express
var express = require("express");

//extracting the routes
var router = express.Router();

//requring the schema model
var userModel = require("../model/model")

// handling the request of rendring the form

 router.get("/",(req ,res)=> {
     res.render("login");
 })


// Exporing the module of route
module.exports = router;