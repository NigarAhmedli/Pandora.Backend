import basketModel from "../models/basketModels.js"




const getBasket=async(req,res)=>{
    const basket=await basketModel.find()
    res.json(basket)
}
const postBasket=async(req,res)=>{
    const newBasket=req.body
    await basketModel.create(newBasket)
    res.json(newBasket)
}
const deleteBasket=async(req,res)=>{
    const {id}=req.params
    await basketModel.findByIdAndDelete(id)
    res.json('delete')
}
const updateBasket = async (req, res) => {
  const { id } = req.params;
  const updatedItem = await basketModel.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updatedItem); // 🔁 Yenilənmiş məlumatı geri göndərir
};




export {getBasket,postBasket,deleteBasket,updateBasket}