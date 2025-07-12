import collectionModel from "../models/collectionModels.js"

const getCollectionById = async (req, res) => {
  const { id } = req.params;
  try {
    const collection = await collectionModel.findById(id);
    if (!collection) {
      return res.status(404).json({ message: 'Məhsul tapılmadı' });
    }
    res.json(collection);
  } catch (error) {
    res.status(500).json({ message: 'Server xətası' });
  }
};


const getCollection=async(req,res)=>{
    const collection=await collectionModel.find()
    res.json(collection)
}
const postCollection=async(req,res)=>{
    const newCollection=req.body
    await collectionModel.create(newCollection)
    res.json(newCollection)
}
const deleteCollection=async(req,res)=>{
    const {id}=req.params
    await collectionModel.findByIdAndDelete(id)
    res.json('delete')
}

export {getCollection,postCollection,deleteCollection,getCollectionById}