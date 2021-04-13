const express=require('express')
const router=express.Router()

const Flipper = require('../models/Flippers')



// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/contacts/
// [GET] localhost:5000/contacts/
router.get("/",(req,res)=>{
    const {limit,sort,embed} = req.query;
    Flipper.find({})
    .limit(+limit)

    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/contacts
// [POST] localhost:5000/contacts
router.post("/",(req,res)=>{
    const { nom,images,description,prix,etat }= req.body
    const newFlipper=new Flipper({
         nom,images,description,prix,etat
    })
    newFlipper.save() // du mongoose
    .then(flipper=>res.send(flipper))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Flipper.findOne({_id:_id})
      .then(flipper=>res.send(flipper))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const {name,email,phone}=req.body
    Flipper.findOneAndUpdate({_id},{name,email,phone})
    .then(contact=>res.send(contact))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Flipper.findOneAndDelete({_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
