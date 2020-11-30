const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");
router.post("/mens",async(req,res)=>{
    try
    {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const result = await addingMensRecords.save();
        res.send(result);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

})

router.get("/mens",async(req,res)=>{
    try
    {
       const getMens = await MensRanking.find({}) 
       res.status(201).send(getMens);
    }
    catch(e)
    {
        res.status(400).send(e);
    }

})

// for individual
router.patch("/mens/:id",async(req,res)=>{
    try
    {
        const _id = req.params.id;
       const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
       });
       res.status(201).send(getMen);
    }
    catch(e)
    {
        res.status(500).send(e);
    }

})

router.delete("/mens/:id",async(req,res)=>{
    try
    {
       const getMen = await MensRanking.findByIdAndDelete(req.params.id);
       res.status(201).send(getMen);
    }
    catch(e)
    {
        res.status(500).send(e);
    }

})
module.exports = router;