const path         = require('path');
const HOMEDIR      = path.join(__dirname,'..');
const express=require('express')
const router=express.Router()

const ContactService     = require(path.join(HOMEDIR,'services','contacts-service'));

// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/contacts/
// [GET] localhost:5000/contacts/
router.get("/", async(req,res)=>{
    const allContacts = await ContactService.findAllContacts(req.query);
    res.json(allContacts)
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/contacts
// [POST] localhost:5000/contacts
router.post("/",async (req,res)=>{
    const tryToSave = await ContactService.saveOne(req.body);
    res.json(tryToSave)
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.get("/:_id",async (req,res)=>{
    const allContacts = await ContactService.findAllContacts(req.query);
    res.json(allContacts)
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.put("/:_id",async (req,res)=>{

    res.json({msg:'PUT id'})
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/contacts/6055c2a61bcfb139a404b3a0
router.delete("/:_id",async (req,res)=>{
    res.json({msg:'DELETE id'})
})


module.exports=router
