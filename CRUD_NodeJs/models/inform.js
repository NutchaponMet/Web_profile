const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Design Model
const Inform = new Schema({
    fname: String,
    lname: String,
    email: String,
})

// Create Model
let information = mongoose.model("information", Inform)

// Export Model
module.exports = information

// function for update data
module.exports.saveInformation = (model, data)=>{
    model.save(data)
}