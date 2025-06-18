import express from "express"
import { authUser, createUser, getUser, logoutUser, updateUserData } from "../controllers/userController.js"
import userControl from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";


const router=express.Router()
router.post('/update', userControl, upload.single('avatar'), updateUserData);

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
.get(userControl, getUser);




export default router