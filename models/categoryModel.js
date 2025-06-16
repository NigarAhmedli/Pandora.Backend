import mongoose from "mongoose";


export const categorySchema=mongoose.Schema({
    image:{type:String},
    title:{type:String},
    price:{type:String},
    description: { type: String },
},{timestamps:true})

const categoryModel = mongoose.models.category || mongoose.model("category", categorySchema);


export default categoryModel