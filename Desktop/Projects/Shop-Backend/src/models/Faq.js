const mongoose = require("mongoose")
const Schema = mongoose.Schema

const FaqSchema = new Schema({

question: {type: String, maxLength:300},
answer: {type: String, maxLength:1000},



},{
    timestamps:true,
}) 

const Faq = mongoose.model("Faq", FaqSchema)
module.exports = Faq