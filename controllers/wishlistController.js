import wishlistModel from "../models/wishlistModel.js"


const getWishlist=async(req,res)=>{
    const wishlist=await wishlistModel.find()
    res.json(wishlist)
}
const postWishlists=async(req,res)=>{
    const newWishlist=req.body
    await wishlistModel.create(newWishlist)
    res.json(newWishlist)
}
const deleteWishlist=async(req,res)=>{
    const {id}=req.params
    await wishlistModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getWishlist,postWishlists,deleteWishlist}