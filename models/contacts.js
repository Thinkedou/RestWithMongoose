const mongoose = require('mongoose')
const {Schema}   = mongoose

// https://mongoosejs.com/docs/schematypes.html
const ContactSchema=new Schema({
    name : { type:String, lowercase: true, required:'un nom est obligatoire:)' },
    email: { type:String },
    phone: { type:String },
    hobbies: {
        type: [
          {
            type: String,
          }
        ],
        default: ["kayak"],
    },
    createdDate:{ type: Date, default: Date.now },
    isAdmin:{ type: Boolean, default: false },
})

//
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


module.exports=mongoose.model('contacts',ContactSchema)
