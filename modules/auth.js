// //requring the model of user
// var user = require("../model/model")
// //making the middle ware for template and exporting it
// exports.checkLoggeduUsers = (req,res,next) => {
//     if(req.session && req.session.userId) {
//         user.findById(req.session.userId,(err,user) => {
//             req.user = user;
//             res.locals.user = user;
//             next();
//         })} else {
//             req.user = null;
//             res.locals.user = null;
//             next();
//         }
//     }

