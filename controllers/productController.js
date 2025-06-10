import productModel from "../models/productModels.js"



const getProducts=async(req,res)=>{
    const products=await productModel.find()
    res.json(products)
}
const postProducts=async(req,res)=>{
    const newProducts=req.body
    await productModel.create(newProducts)
    res.json(newProducts)
}
const deleteProducts=async(req,res)=>{
    const {id}=req.params
    await productModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getProducts,postProducts,deleteProducts}