import ringsModel from "../models/ringsModel.js"




const getRings=async(req,res)=>{
    const rings=await ringsModel.find()
    res.json(rings)
}
const postRings=async(req,res)=>{
    const newRings=req.body
    await ringsModel.create(newRings)
    res.json(newRings)
}
const deleteRings=async(req,res)=>{
    const {id}=req.params
    await ringsModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getRings,postRings,deleteRings}