const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const FlipperSchema=new schema({
    nom :  { type:String, required: 'nom de flipper obligatoire :)' },
    images:[String],
    description:{ type:String },
    prix:{type:Number},
    etat:{type:String},
    coupDeCoeur:{type:Boolean, default:false},
    dateDeSortie:{type:Date},
    note:{type:Number},
    tags:[String]
})




module.exports=mongoose.model('flipper',FlipperSchema)
