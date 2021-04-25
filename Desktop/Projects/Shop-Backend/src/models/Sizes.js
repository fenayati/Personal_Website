const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SizeSchema = new Schema({

title: {type: String, maxLength:30},
category: [{type: mongoose.SchemaTypes.ObjectId, ref:"Category"}],

     
},{
    timestamps:true,
}) 

const Size = mongoose.model("Size", SizeSchema)
module.exports = Size