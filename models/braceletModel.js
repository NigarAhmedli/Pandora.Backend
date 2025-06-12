import mongoose from "mongoose";


export const braceletSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const braceletModel=mongoose.model('bracelet',braceletSchema)

export default braceletModel