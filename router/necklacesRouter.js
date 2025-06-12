
import express from 'express'
import { deleteNecklaces, getNecklaces, postNecklaces } from '../controllers/necklacesController.js'


const router=express.Router()
router.route('/')
.get(getNecklaces)
.post(postNecklaces)

router.route('/:id')

.delete(deleteNecklaces)
export default router