
import express from 'express'
import { deleteNecklaces, getNecklaceById, getNecklaces, postNecklaces } from '../controllers/necklacesController.js'


const router=express.Router()
router.route('/')
.get(getNecklaces)
.post(postNecklaces)

router.route('/:id')
.get(getNecklaceById) 
.delete(deleteNecklaces)
export default router