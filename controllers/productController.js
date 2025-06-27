import productModel from "../models/productModels.js"

export const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id); 
    if (!product) {
      return res.status(404).json({ message: "Məhsul tapılmadı" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};



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