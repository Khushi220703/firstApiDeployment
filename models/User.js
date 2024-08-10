const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    number:{
        type:String,
    },
    gender:{
        type:String,
    }
})

const UserCollection = new mongoose.model("UserCollection", schema);

module.exports = UserCollection;