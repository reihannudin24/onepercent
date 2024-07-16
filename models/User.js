
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username  : {
       type : String,
       required : true,
        unique : true
   },
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    email : {
       type : String,
       required : true,
       unique : true
    },
    password : {
      type : String,
      required : true
    },
    contact : {
        type : String,
        required : true,
        unique : true
    },
    age : {
       type : Number,
    },
    birthday :  {
       type : Date,
        required : true
    },
    location : {
        type: String
    }
});

userSchema.pre('save' , async function(next) {
    if (!this.isModified('password')) return next();
    try{
        const salt = await  bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next()
    }catch (error){
        next(error)
    }
})

// methode to compare password
userSchema.methods.comparePassword = async function(inputPassword){
    return await bcrypt.compare(inputPassword, this.password);
}

const User = mongoose.model('User' , userSchema);

module.exports = User;