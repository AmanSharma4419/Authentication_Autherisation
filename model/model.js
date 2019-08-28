//requriong the mongoose
var mongoose = require("mongoose");
//extrating the schema
var schema = mongoose.schema;
//making the schema
var usersSchema = new schema ({
    name: String,
    email:string
},{timestamps: true})
//making the model of schema 
var UserModel = mongoose.model("userModel",usersSchema)
//exporting the schema model
module.exports = UserModel;