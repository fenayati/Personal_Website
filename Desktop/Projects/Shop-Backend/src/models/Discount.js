const mongoose = require("mongoose")
const Schema = mongoose.Schema

const DiscountSchema = new Schema({

    text: {type: String, maxLength:50},
    percent: {type: Number, max:100},
    expiredDate: {type: String},
    user: [{type: mongoose.SchemaTypes.ObjectId, ref:"User"}], 
    categories: [{type: mongoose.SchemaTypes.ObjectId, ref:"Category"}], 


       
    
},{
    timestamps:true,
}) 

const Discount = mongoose.model("Discount", DiscountSchema)
module.exports = Discount