import express from 'express'
import { deleteWishlist, getWishlist, postWishlists } from '../controllers/wishlistController.js'


const router=express.Router()
router.route('/')
.get(getWishlist)
.post(postWishlists)

router.route('/:id')

.delete(deleteWishlist)
export default router