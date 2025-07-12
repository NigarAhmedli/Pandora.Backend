import mongoose from "mongoose";


export const necklacesSchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String},
    description: { type: String },
},{timestamps:true})

const necklacesModel=mongoose.model('necklaces',necklacesSchema)

export default necklacesModel