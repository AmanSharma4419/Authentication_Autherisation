//requring the model of user
var User = require("../model/model")
//making the middle ware for template and exporting it
exports.checkLoggedUsers = (req,res,next) => {
    if(req.session && req.session.userId) {
        User.findById(req.session.userId,(err,user) => {
            req.user = user;//providig the acees of users to the all requests in the routes
            res.locals.user = user;//providing the acess to the templated file 
            next();
    })} else {
            req.user = null;
            res.locals.user = null;
            next();
    }
}

