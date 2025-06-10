import mongoose from "mongoose";


export const wishlistSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const wishlistModel=mongoose.model('wishlist',wishlistSchema)

export default wishlistModel