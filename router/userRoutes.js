import express from "express"
import { authUser, createUser, getUser, logoutUser } from "../controllers/userController.js"
import userControl from "../middleware/authMiddleware.js"


const router=express.Router()

router
.route('/signup')
.post(createUser)

router
.route('/login')
.post(authUser)

router
.route('/logout')
.post(logoutUser)

router
.route('/getuser')
.get( getUser)



export default router