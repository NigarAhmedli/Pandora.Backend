import { deleteBasket, getBasket, postBasket, updateBasket } from "../controllers/basketController.js"
import express from 'express'



const router=express.Router()
router.route('/')
.get(getBasket)
.post(postBasket)

router.route('/:id')
  .delete(deleteBasket)
  .put(updateBasket); 

router.route('/:id')

.delete(deleteBasket)
export default router