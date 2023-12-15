const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

module.exports = mongoose.model('product' , productSchema);