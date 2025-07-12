import necklacesModel from "../models/necklacesModel.js"

const getNecklaceById = async (req, res) => {
  try {
    const necklace = await necklacesModel.findById(req.params.id);
    if (!necklace) {
      return res.status(404).json({ message: "Boyunbağı tapılmadı" });
    }
    res.json(necklace);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};



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

export {getNecklaces,postNecklaces,deleteNecklaces,getNecklaceById}