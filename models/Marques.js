const mongoose = require('mongoose')
const {Schema}   = mongoose

// https://mongoosejs.com/docs/schematypes.html
const MarqueSchema=new Schema({
    nom        : { type:String, required:'un nom de marque est obligatoire' },
    logoIcon   : {type:String},
    description: {type:String},
    flippers   : [{
            type     : mongoose.Schema.Types.ObjectId,
            ref      : 'flippers'
        }]
})



module.exports  = mongoose.model('marques',MarqueSchema)
