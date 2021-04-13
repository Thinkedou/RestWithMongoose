const mongoose = require('mongoose')
const schema   = mongoose.Schema

// https://mongoosejs.com/docs/schematypes.html
const MarqueSchema=new schema({
    nom        : { type:String, required:'un nom de marque est obligatoire' },
    logoIcon   : {type:String},
    description: {type:String},
    flippers   : [{
            type     : mongoose.Schema.Types.ObjectId,
            ref      : 'flipper'
        }]
})



module.exports  = mongoose.model('marque',MarqueSchema)
