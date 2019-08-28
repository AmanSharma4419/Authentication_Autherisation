var express = require('express');
var router = express.Router();

// handled route for the rendring registration form 
router.get("/new" ,(req,res) => {
//res.render("create")
res.send("hello")
console.log("welcome")
})

module.exports = router;
