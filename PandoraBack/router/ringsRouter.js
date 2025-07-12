import express from 'express'
import { deleteRings, getRings, getSingleRing, postRings } from '../controllers/ringsController.js'


const router=express.Router()
router.route('/')
.get(getRings)
.post(postRings)

router.route('/:id')
  .get(getSingleRing)
.delete(deleteRings)
export default router