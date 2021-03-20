const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ContactSchema=new schema({
    name:{type:String},
    email:{type:String},
    phone:{type:String}
})

module.exports=Contact=mongoose.model('contact',ContactSchema)
