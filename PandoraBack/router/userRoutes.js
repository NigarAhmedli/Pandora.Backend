import express from "express"
import { authUser, createUser, getAllUsers, getUser, getUserStats, logoutUser, updateUserData, updateUserRole } from "../controllers/userController.js"
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
router.get('/all',  getAllUsers);

router.put("/role",  updateUserRole);

router.get('/stats/users', userControl, getUserStats);



export default router