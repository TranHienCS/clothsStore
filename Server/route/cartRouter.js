const express = require('express');
const cartRoutes = express.Router();
const cart = require('../model/cart.js');

cartRoutes.route('/addcartproduct').post(async(req,res)=>{
    let reqData = new cart(req.body);
    reqData.save()
    .then(() => res.status(200).json({ 'status': 'true', 'message': 'product in added successfully' }))
    .catch(() => res.status(400).json({ 'status': 'false', 'message': 'product not added successfully' }))
})

cartRoutes.route('/cartbyusername').post(async (req,res)=>{
    let username =req.body.username;
    let allitem = await cart.find({username:username},(err,docs)=>docs)
    res.json(allitem);
})

cartRoutes.route('/deleteitembyid').delete(async(req,res)=>{
    let idItem = req.body.id;
    let isDelete = await cart.deleteOne({"_id":idItem},err =>{if(err) console.log(err)})
    res.json(isDelete);
})

cartRoutes.route('/getallcart').get(async(req,res)=>{
    let allitem = await cart.find({},(err,docs)=>docs);
    res.json(allitem);
})

cartRoutes.route('/updatequantity').post(async(req,res)=>{
    let id = req.body.id;
    let quantity= req.body.quantity;
    let isUpdate = await cart.findByIdAndUpdate(id,{quantity:quantity})
    res.json(isUpdate);
})