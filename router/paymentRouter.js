import express from 'express'
import { createPaymentIntent } from '../controllers/paymentController.js'


const paymentRouter = express.Router()

paymentRouter.route("/create-payment-intent")
.post(createPaymentIntent)


export default paymentRouter