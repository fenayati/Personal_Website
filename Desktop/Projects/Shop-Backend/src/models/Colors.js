const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ColorSchema = new Schema({

title: {type: String, maxLength:50},
code: {type: String, maxLength:6},


     
},{
    timestamps:true,
}) 

const Color = mongoose.model("Color", ColorSchema)
module.exports = Color