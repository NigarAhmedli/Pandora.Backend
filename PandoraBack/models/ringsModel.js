import mongoose from "mongoose";


export const ringsSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String},
    description: { type: String },
},{timestamps:true})

const ringsModel=mongoose.model('rings',ringsSchema)

export default ringsModel