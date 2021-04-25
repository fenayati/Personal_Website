const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SlideSchema = new Schema({

title: {type: String, maxLength:50},
subtitle: {type: String, maxLength:150},
image: {type: String, maxLength:200},
date : {type: String},
discount: {type: Number},
category: {type: mongoose.SchemaType.ObjectId, ref:"Category"}

} , {
    timestamps:true,
}) 

const Slide = mongoose.model("Slide", SlideSchema)
module.exports=Size