import express from 'express'
import { deleteBracelet, getBracelet, postBracelet } from '../controllers/braceletController.js'


const router=express.Router()
router.route('/')
.get(getBracelet)
.post(postBracelet)

router.route('/:id')

.delete(deleteBracelet)
export default router