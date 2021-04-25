const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AddressSchema = new Schema({

firstName: {type: String, maxLength:30},
lastName: {type: String, maxLength:30},
company: {type: String, maxLength:30},
address: {type: String, maxLength:30},
city: {type: String, maxLength:30},
country: {type: String, maxLength:30},
zipcode: {type: String, maxLength:30},
phone: {type: String, maxLength:15},
long: {type: String, maxLength:30},
lat: {type: String, maxLength:30},
user: {type: mongoose.SchemaTypes.ObjectId, ref:"User"},

     
},{
    timestamps:true,
}) 

const Address = mongoose.model("Address", AddressSchema)
module.exports = Address