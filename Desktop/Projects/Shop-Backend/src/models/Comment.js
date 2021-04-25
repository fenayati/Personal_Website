const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CommentSchema = new Schema({

text: {type: String, maxLength:3000},
user: {type: mongoose.SchemaTypes.ObjectId, ref:"User"}, 
post: {type: mongoose.SchemaTypes.ObjectId, ref:"Post"}, 

},{
    timestamps:true,
}) 

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment