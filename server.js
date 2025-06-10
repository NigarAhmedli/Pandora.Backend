import express from 'express'
import cors from 'cors'
import ProductRouter from './router/productRouter.js'
import BasketRouter from './router/basketRouter.js'
import { configDotenv } from 'dotenv'
import { connectDB } from './config/config.js'
import WishlistRouter from './router/wishlistRouter.js'


configDotenv()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))
connectDB()

app.use('/products',ProductRouter)
app.use('/basket',BasketRouter)
app.use('/wishlist',WishlistRouter)

app.listen(5000,()=>{
    console.log('backend ishleyr');
})