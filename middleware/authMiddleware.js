import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

const userControl=async(req,resizeBy,next)=>{
    let token

    token=req.cookies.jwt

    if (!token) {
        res.json('token tapilmadi')
    }

    try {
        const decoded=jwt.verify(token, process.env.JWT_SECRET)

        req.user=await UserModel.findById(decoded.id).select('.password')
        next()

    } catch (error) {
        console.log(error);
        
    }

}


export default userControl