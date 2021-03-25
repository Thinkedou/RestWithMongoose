const mongoose = require('mongoose')
const schema   = mongoose.Schema


// https://mongoosejs.com/docs/schematypes.html
const MarquesSchema=new schema({
    nom         : { type:String, required: 'nom de marque obligatoire :)' },
    logoIcon    : { type:String },
    description : { type:String},
    flippersRef:[{
            type     : mongoose.Schema.Types.ObjectId,
            ref      : 'flipper'
        }]
})




module.exports=mongoose.model('marques',MarquesSchema)
