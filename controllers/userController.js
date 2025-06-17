import UserModel from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js";



const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Yeni qeydiyyat sorğusu gəldi:", req.body);

  // 1. Əgər istifadəçi varsa, xətanı qaytar
  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'İstifadəçi artıq mövcuddur' });
  }

  // 2. Yeni istifadəçini yarat
  const newUser = await UserModel.create({ name, email, password });

  // 3. Token cookie-yə yaz 
  generateToken(res, newUser._id);

  // 4. İstifadəçi məlumatını frontend-ə qaytar
  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  });
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