const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    fristName : { type : String, require : true },

    lastName: { type: String, require : true },

    password: { type : String},

    email : { type : String, unique : true ,required: true },

    gender : { type : String, enum : ["Male","Female"] },

    isDelete : { type : Boolean, default : false}

});

module.exports = mongoose.model('user' , userSchema);