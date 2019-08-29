// requring the express
var express = require("express");

//extracting the routes
var router = express.Router();

//requring the schema model
var User = require("../model/model")

// handling the request of rendring the form
 router.get("/",(req ,res) => {
     res.render("login");
 })

 //handling the post route of login
 router.post("/",(req,res,next) => {
     var pass = req.body.password;
     User.findOne({email:req.body.email}, (err,user) => {
        //  check input of user
        if(err)  return next(err);
        if(!user) return res.redirect("/login");
        if(!user.confirmPassword(pass)) return res.redirect("/login");
        // actuall login
        req.session.userId = user._id;
        res.send("welcome")
        //res.redirect("/users");
     })
 })
// Exporing the module of route
module.exports = router;