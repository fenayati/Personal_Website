const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PostSchema = new Schema({

    title: {type: String, maxLength:100},
    description: {type: String, maxLength:2000},
    comments: [{type: mongoose.SchemaTypes.ObjectId, ref:"Comment"}], 
    tags: [{type: mongoose.SchemaTypes.ObjectId, ref:"Tag"}], 

},{
    timestamps:true,
}) 

const Post = mongoose.model("Post", PostSchema)
module.exports = Post