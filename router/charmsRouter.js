import express from 'express'
import { deleteCharms, getCharms, getSingleCharm, postCharms } from '../controllers/charmsController.js'
import charmsModel from '../models/charmsModel.js'



const router=express.Router()
router.route('/')
.get(getCharms)
.post(postCharms)

router.route('/:id')
  .get(async (req, res) => {
    try {
      const charm = await charmsModel.findById(req.params.id)
      if (!charm) {
        return res.status(404).json({ message: "Məhsul tapılmadı" })
      }
      res.json(charm)
    } catch (error) {
      res.status(500).json({ message: "Xəta baş verdi" })
    }
  })

.get(getSingleCharm) 
.delete(deleteCharms)
export default router