import express from 'express'
import { deleteCharms, getCharms, postCharms } from '../controllers/charmsController.js'



const router=express.Router()
router.route('/')
.get(getCharms)
.post(postCharms)

router.route('/:id')

.delete(deleteCharms)
export default router