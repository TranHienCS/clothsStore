import bcrypt from 'bcryptjs';
import User from '../model/users.js';
import JWT from 'jsonwebtoken';
require('dotenv').config();

const createToken = user=>{
    return JWT.sign({id:user._id,role:user.isAdmin},JWT_SECRET,{
        expiresIn:new Date().setDate(new Date().getDate()+1),
        subject: app_token,
        issuer: tvh
    })
}

export default class userController{
    handleLogin = (req,res)=>{
        const token = createToken(req.)
    }
    handleRegister =async (req,res)=>{
        const email= req.body.email;    
        const password = req.body.passoword;
        const name = req.body.name;
        try{
            const finduser = await User.findOne({email:email});
            if (finduser){
                console.log(finduser);
                return res.status(403).json({error:'Email is already in use'});
            }
            const hashPass = await bcrypt.hash(password,process.env.SALT);
            
            const user = new User({
                email,
                password: hashPass,
                name,
                isAdmin: 0
            });
            await user.save();
            res.status(200).json({token,result:'Create account success'})
        } catch(error){
            console.log(error);
        }
    }
}