//requriong the mongoose
var mongoose = require("mongoose");
//extrating the schema
var schema = mongoose.Schema;
//making the schema
var userSchema = new schema ({
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
//implementing the presave function
//usersSchema.pre()
//making the model of schema 
var User = mongoose.model("User",userSchema)
//exporting the schema model
module.exports = User;