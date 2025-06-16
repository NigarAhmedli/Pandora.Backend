import ringsModel from "../models/ringsModel.js"

const getSingleRing = async (req, res) => {
  const { id } = req.params;
  try {
    const ring = await ringsModel.findById(id);
    if (!ring) {
      return res.status(404).json({ message: "Ring tapılmadı" });
    }
    res.json(ring);
  } catch (error) {
    res.status(500).json({ message: "Xəta baş verdi" });
  }
};



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

export {getRings,postRings,deleteRings,getSingleRing}