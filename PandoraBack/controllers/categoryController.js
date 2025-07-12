import categoryModel from "../models/categoryModel.js"




const getCategory=async(req,res)=>{
    const category=await categoryModel.find()
    res.json(category)
}
const postCategory=async(req,res)=>{
    const newCategory=req.body
    await categoryModel.create(newCategory)
    res.json(newCategory)
}
const deleteCategory=async(req,res)=>{
    const {id}=req.params
    await categoryModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getCategory,postCategory,deleteCategory}