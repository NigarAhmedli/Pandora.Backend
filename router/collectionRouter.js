import express from 'express'
import { deleteCollection, getCollection, getCollectionById, postCollection } from '../controllers/collectionController.js'


const router=express.Router()
router.route('/')
.get(getCollection)
.post(postCollection)

router.route('/:id')
.get(getCollectionById)
.delete(deleteCollection)
export default router