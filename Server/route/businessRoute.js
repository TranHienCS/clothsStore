const express = require('express');
const businessRoutes = express.Router();
// const request = require('request');
const clothes = require('../model/clothes.js');
const cart = require('../model/cart.js');
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
    let reqData = new clothes(req.body);
    reqData.save()
    .then(() => res.status(200).json({ 'status': 'true', 'message': 'business in added successfully' }))
    .catch(() => res.status(400).json({ 'status': 'false', 'message': 'business not added successfully' }))
})

businessRoutes.route('/addcartproduct').post((req,res)=>{
    let reqData = new cart(req.body);
    reqData.save()
    .then(() => res.status(200).json({ 'status': 'true', 'message': 'product in added successfully' }))
    .catch(() => res.status(400).json({ 'status': 'false', 'message': 'product not added successfully' }))
})

businessRoutes.route('/cartbyusername').post(async (req,res)=>{
    let username =req.body.username;
    let allitem = await cart.find({username:username},(err,docs)=>docs)
    res.json(allitem);
})

businessRoutes.route('/deleteitembyid').delete(async(req,res)=>{
    let idItem = req.body.id;
    console.log(idItem);
    let isDelete = await cart.deleteOne({"_id":idItem},err =>{if(err) console.log(err)})
    res.json(isDelete);
})
module.exports = businessRoutes;