import { deleteProducts, getProductById, getProducts, postProducts } from "../controllers/productController.js"
import express from 'express'


const router=express.Router()
router.route('/')
.get(getProducts)
.post(postProducts)

router.route('/:id')
.get(getProductById) 
.delete(deleteProducts)
export default router