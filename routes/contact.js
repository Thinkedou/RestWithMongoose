const express=require('express')
const router=express.Router()

const Contact=require('../models/Contact')


// sur POST sans id : il s'agit de la création du document
// localhost:5000/contacts
router.post("/",(req,res)=>{
    const {name,email,phone}=req.body
    const newContact=new Contact({
        name,email,phone
    })
    newContact.save()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/contacts/
router.get("/",(req,res)=>{
    Contact.find()
    .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})

// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOne({_id})
      .then(contacts=>res.send(contacts))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params
    const {name,email,phone}=req.body
    Contact.findOneAndUpdate({_id},{$set:{name,email,phone}})
    .then(contacts=>res.send("contact Updated"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Contact.findOneAndDelete({_id:_id})
    .then(contacts=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
