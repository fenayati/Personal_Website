const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OptionSchema = new Schema({

key: {type: String, maxLength:50},
value: {type: String, maxLength:100},


},{
    timestamps:true,
}) 

const Option = mongoose.model("Option", OptionSchema)
module.exports = Option