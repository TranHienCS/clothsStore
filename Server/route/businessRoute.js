const express = require('express');
const businessRoutes = express.Router();
// const request = require('request');
const clothes = require('../model/clothes.js');

businessRoutes.route('/register').post((req,res)=>{
    let infoRegister=req.body;
    console.log(infoRegister);
})

businessRoutes.route('/products').get(async(req,res)=>{
    let allitems = await clothes.find({},(err,docs)=>docs);
    res.json(allitems);
})

businessRoutes.route('/searchById').post(async (req,res)=>{
    let id = req.body.id;
    let item = await clothes.find({_id: id},(err,docs)=>docs);
    res.json(item);
})

businessRoutes.route('/addproducts').post((req,res)=>{
    console.log(req.body);
    let reqData = new clothes(req.body);
    reqData.save()
    .then(() => res.status(200).json({ 'status': 'true', 'message': 'business in added successfully' }))
    .catch(() => res.status(400).json({ 'status': 'false', 'message': 'business not added successfully' }))
})

module.exports = businessRoutes;