const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title : {

        type : String,
        unique : true
    },
    discription : {
        type: String},
    price : Number,
    category : [String],
    brand : String,
    isDelete : {

        type : Boolean,
        default : false
    }
});

module.exports = mongoose.model('user' , userSchema);