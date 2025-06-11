import mongoose from "mongoose";


export const charmsSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String}
},{timestamps:true})

const charmsModel=mongoose.model('category',charmsSchema)

export default charmsModel