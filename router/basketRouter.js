import { deleteBasket, getBasket, postBasket } from "../controllers/basketController.js"
import express from 'express'



const router=express.Router()
router.route('/')
.get(getBasket)
.post(postBasket)

router.route('/:id')

.delete(deleteBasket)
export default router