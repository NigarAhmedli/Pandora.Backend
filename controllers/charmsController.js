import charmsModel from "../models/charmsModel.js"


const getSingleCharm = async (req, res) => {
  const { id } = req.params;
  try {
    const charm = await charmsModel.findById(id);
    if (!charm) {
      return res.status(404).json({ message: 'Tapılmadı' });
    }
    res.json(charm);
  } catch (error) {
    res.status(500).json({ message: 'Server xətası' });
  }
};



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

export {getCharms,postCharms,deleteCharms,getSingleCharm}