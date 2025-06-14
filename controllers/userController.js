import UserModel from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js";

const createUser=async(req,res)=>{
    const {name,email,password}=req.body
    const user=await UserModel.findOne({email})

if (user) {
    res.json('User artiq var')
}
await UserModel.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password
})

res.json('user created');
};

const authUser=async(req,res)=>{
    const {email,password} =req.body
    
    const user=await UserModel.findOne({email})

if (user && await user.passwordControl(password)) {
    generateToken(res, user._id)
    res.json('logged in')
}else{
    res.json('email ve ya parol sehvdir')
}

}

const logoutUser=async(req,res)=>{
    res.cookie('jwt','', {
        httpOnly:true,
        expires:new Date (0)
    })
    res.json('logged out')
}

const getUser=async (req,res)=>{
    if (req.user) {
        res.json({
            name:req.user.name,
            email:req.user.email,
        })
    }

    res.json('unauth')

}


export {createUser,authUser,logoutUser,getUser };