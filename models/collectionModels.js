import mongoose from "mongoose";


export const collectionSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const collectionModel=mongoose.model('collection',collectionSchema)

export default collectionModel