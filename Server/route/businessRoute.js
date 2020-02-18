const express = require('express');
const businessRoutes = express.Router();
const request = require('request');

businessRoutes.route('/register').post((req,res)=>{
    let infoRegister=req.body;
    console.log(infoRegister);
})

module.exports = businessRoutes;