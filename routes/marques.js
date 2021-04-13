const express=require('express')
const router=express.Router()

const Marque = require('../models/Marques')

// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/marques/
// [GET] localhost:5000/marques/


router.get("/",(req,res)=>{
    let {embed}=req.query;
    Marque.find().populate(embed)
    .then(marques=>res.send(marques))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/marques
// [POST] localhost:5000/marques
router.post("/",(req,res)=>{
    const { nom,logoIcon,description,flippers }= req.body
    const newM=new Marque({
         nom,logoIcon,description,flippers
    })
    newM.save() // du mongoose
    .then(marque=>res.send(marque))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/marques/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/marques/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Marque.findOne({_id:_id})
      .then(flipper=>res.send(flipper))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/marques/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const {nom,logoIcon,description,flippers}=req.body
    Marque.findOneAndUpdate({_id},{nom,logoIcon,description,flippers})
    .then(m=>res.send(m))
    .catch(err=>console.log(err))
})


module.exports=router
