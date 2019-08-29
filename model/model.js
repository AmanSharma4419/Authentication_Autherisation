//requriong the mongoose
var mongoose = require("mongoose");
//extrating the schema
var schema = mongoose.Schema;
//requring the bcrypt
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
//implementing the presave function it hides password before entering into database
userSchema.pre('save', function(next) {
    if(this.password) {
        this.password = bcrypt.hashSync(this.password, 10);
        next();
    }
});
//comparing the hashing and the plane password
userSchema.method.confirmPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}
//making the model of schema 
var User = mongoose.model("User",userSchema);
//exporting the schema model
module.exports = User;