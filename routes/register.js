//requring the express
var express = require('express');

//extracting the route
var router = express.Router();
//requring the schemamodel
var userModel = require("../model/model")

//handling route for the rendring the form
router.get("/",(req,res) => {
  res.render("register")
})

//handling the post route from form
router.post("/",(req,res) => {
 userModel.create(req.body,(err,sucessfull) => {
  if(err) console.log(err)
  res.redirect("/login")
 })
})

//exporting the module of route
module.exports = router;
