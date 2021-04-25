const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({

    note: {type: String, maxLength:200},
    user: {type: mongoose.SchemaTypes.ObjectId, ref:"User"},
    discount: {type: mongoose.SchemaTypes.ObjectId, ref:"Discount"},
    products: [
        {
        product: {type: mongoose.SchemaTypes.ObjectId, ref:"Product"}, 
        count:Number,
        },
],
    
},{
    timestamps:true,
}) 

const Order = mongoose.model("Order", OrderSchema)
module.exports = Order