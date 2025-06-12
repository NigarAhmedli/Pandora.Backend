import express from 'express'
import { deleteCollection, getCollection, postCollection } from '../controllers/collectionController.js'


const router=express.Router()
router.route('/')
.get(getCollection)
.post(postCollection)

router.route('/:id')

.delete(deleteCollection)
export default router