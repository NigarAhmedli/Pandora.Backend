import charmsModel from "../models/charmsModel.js"





const getCharms=async(req,res)=>{
    const charms=await charmsModel.find()
    res.json(charms)
}
const postCharms=async(req,res)=>{
    const newCharms=req.body
    await charmsModel.create(newCharms)
    res.json(newCharms)
}
const deleteCharms=async(req,res)=>{
    const {id}=req.params
    await charmsModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getCharms,postCharms,deleteCharms}