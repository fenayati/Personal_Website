const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({

title: {type: String, maxLength:30},
image: {type: String, maxLength:200},
products: [{type: mongoose.SchemaTypes.ObjectId, ref:"Product"}],
sizes: [{type: mongoose.SchemaTypes.ObjectId, ref:"Size"}],


     
},{
    timestamps:true,
}) 

const Category = mongoose.model("Category", CategorySchema)
module.exports = Category