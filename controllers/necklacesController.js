import necklacesModel from "../models/necklacesModel.js"




const getNecklaces=async(req,res)=>{
    const necklaces=await necklacesModel.find()
    res.json(necklaces)
}
const postNecklaces=async(req,res)=>{
    const newNecklaces=req.body
    await necklacesModel.create(newNecklaces)
    res.json(newNecklaces)
}
const deleteNecklaces=async(req,res)=>{
    const {id}=req.params
    await necklacesModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getNecklaces,postNecklaces,deleteNecklaces}