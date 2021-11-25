const mongoose   = require('mongoose')
const {Schema}   = mongoose

// https://mongoosejs.com/docs/schematypes.html
const FlipperSchema=new Schema({
    nom   : { type:String, required:'un nom de flipper est obligatoire' },
    images: [String],
    description:{type:String},
    prix:{type:Number},
    etat:{type:String,lowercase:true}
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


module.exports=mongoose.model('flippers',FlipperSchema)
