import express from 'express'
import { deleteRings, getRings, postRings } from '../controllers/ringsController.js'


const router=express.Router()
router.route('/')
.get(getRings)
.post(postRings)

router.route('/:id')

.delete(deleteRings)
export default router