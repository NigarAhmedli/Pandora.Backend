import braceletModel from "../models/braceletModel.js"

const getBraceletById = async (req, res) => {
  try {
    const bracelet = await braceletModel.findById(req.params.id);
    if (!bracelet) {
      return res.status(404).json({ message: "Məhsul tapılmadı" });
    }
    res.json(bracelet);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi", error });
  }
};



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

export {getBracelet,postBracelet,deleteBracelet,getBraceletById}