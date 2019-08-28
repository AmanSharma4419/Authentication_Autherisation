//requriong the mongoose
var mongoose = require("mongoose");
//extrating the schema
var schema = mongoose.Schema;
//making the schema
var usersSchema = new schema ({
    name: String,
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps: true})
//making the model of schema 
var UserModel = mongoose.model("userModel",usersSchema)
//exporting the schema model
module.exports = UserModel;