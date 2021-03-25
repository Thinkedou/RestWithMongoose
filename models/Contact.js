const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const ContactSchema=new schema({
    name : { type:String, lowercase: true },
    email: { type:String },
    phone: { type:String },
    hobbies:[],
    createdDate:{ type: Date, default: Date.now },
    isAdmin:{ type: Boolean, default: false },
})


// schema.pre('save', async function save(next) {
//   if (!this.isModified('password')) return next();
//   try {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
// });


module.exports=Contact=mongoose.model('contact',ContactSchema)
