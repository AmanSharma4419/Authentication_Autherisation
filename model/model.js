//requriong the mongoose
var mongoose = require("mongoose");
//extrating the schema
var schema = mongoose.Schema;
//making the schema

//importing the bcrypt
var bcrypt = require("bcrypt")
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
userSchema.pre('save', function(next) {
    if(this.password) {
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    }
});
//comparing the password
userSchema.method.confirmPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
//making the model of schema 
var User = mongoose.model("User",userSchema);
//exporting the schema model
module.exports = User;