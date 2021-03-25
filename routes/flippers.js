const express=require('express')
const router=express.Router()

const Flipper=require('../models/Flipper')



// sur GET sans id : il s'agit de la récupération de tous les documents
// localhost:5000/flippers/
// [GET] localhost:5000/flippers/
router.get("/",(req,res)=>{

    const limit = req.query.limit;
    const {name } = req.query;
    Flipper.find({name})
    .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})

// création d'un alias pour le search :

router.get("/search",(req,res)=>{

    const { q }= req.query;
    let aggregateObj = {
        $search:{
            $text:{
                query:q,
                path:'nom'
            }
        }
    }
    console.log(aggregateObj);
    res.json(aggregateObj)
})




// sur POST sans id : il s'agit de la création du document
// localhost:5000/flippers
// [POST] localhost:5000/flippers
router.post("/",(req,res)=>{
    const { nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags } = req.body
    const newFlipper=new Flipper({
        nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags
    })
    newFlipper.save()
    .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})


// sur GET avec id : il s'agit de la récupération d'un et d'un seul document (s'il existe)
// localhost:5000/flippers/6055c2a61bcfb139a404b3a0
// [GET] localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.get("/:_id",(req,res)=>{
    const {_id}=req.params
    console.log(req.params);
    Flipper.findOne({_id:_id})
      .then(flip=>res.send(flip))
    .catch(err=>console.log(err))
})


// sur PUT avec id : l'édition d'un document
// localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.put("/:_id",(req,res)=>{
    const {_id}=req.params

    const { nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags } = req.body
    Flipper.findOneAndUpdate({_id:_id},{nom,images,description,prix,etat,coupDeCoeur,dateDeSortie,note,tags})
    .then(flip=>res.send("Flipper Updated"))
    .catch(err=>console.log(err))
})


// sur DELETE avec id : la suppression d'un document
//localhost:5000/flippers/6055c2a61bcfb139a404b3a0
router.delete("/:_id",(req,res)=>{
    const {_id}=req.params
    Flipper.findOneAndDelete({_id:_id})
    .then(flip=>res.send("success"))
    .catch(err=>console.log(err))
})


module.exports=router
