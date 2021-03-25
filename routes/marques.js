const express=require('express')
const router=express.Router()

const Marque=require('../models/Marques')



// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/marques/
// [GET] localhost:5000/marques/
router.get("/",(req,res)=>{

    Marque.find({}).populate({path:"flippersRef"})
    .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})

// sur POST sans id : il s'agit de la création du document
// localhost:5000/marques
// [POST] localhost:5000/marques
router.post("/",(req,res)=>{
    const { nom,logoIcon,description,flippersRef} = req.body
    const newMarque=new Marque({
        nom,logoIcon,description,flippersRef
    })
    newMarque.save()
    .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/flippers/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Marque.findOne({_id:_id})
      .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags } = req.body
    Marque.findOneAndUpdate({_id:_id},{nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags})
    .then(flip=>res.send("Flipper Updated"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Marque.findOneAndDelete({_id:_id})
    .then(flip=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
