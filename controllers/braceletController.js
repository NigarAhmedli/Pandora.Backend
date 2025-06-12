import braceletModel from "../models/braceletModel.js"




const getBracelet=async(req,res)=>{
    const bracelet=await braceletModel.find()
    res.json(bracelet)
}
const postBracelet=async(req,res)=>{
    const newBracelet=req.body
    await braceletModel.create(newBracelet)
    res.json(newBracelet)
}
const deleteBracelet=async(req,res)=>{
    const {id}=req.params
    await braceletModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getBracelet,postBracelet,deleteBracelet}