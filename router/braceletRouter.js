import express from 'express'
import { deleteBracelet, getBracelet, getBraceletById, postBracelet } from '../controllers/braceletController.js'


const router=express.Router()
router.route('/')
.get(getBracelet)
.post(postBracelet)


router.route('/:id')
.get(getBraceletById)
.delete(deleteBracelet)
export default router