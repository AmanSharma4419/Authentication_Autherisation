//requring the model of user
var User = require("../model/model")
//making the middle ware for template and exporting it
exports.checkLoggedUsers = (req,res,next) => {
    if(req.session && req.session.userId) {
        User.findById(req.session.userId,(err,user) => {
            req.user = user;
            res.locals.user = user;
            next();
    })} else {
            req.user = null;
            res.locals.user = null;
            next();
    }
}

