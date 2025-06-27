import express from 'express'
import cors from 'cors'
import ProductRouter from './router/productRouter.js'
import BasketRouter from './router/basketRouter.js'
import { configDotenv } from 'dotenv'
import { connectDB } from './config/config.js'
import WishlistRouter from './router/wishlistRouter.js'
import CharmsRouter from './router/charmsRouter.js'
import CategoryRouter from './router/categoryRouter.js'
import BraceletRouter from './router/braceletRouter.js'
import NecklacesRouter from './router/necklacesRouter.js'
import RingsRouter from './router/ringsRouter.js'
import CollectionRouter from './router/collectionRouter.js'
import UserRoutes from './router/userRoutes.js'
import cookieParser from 'cookie-parser'
import path from 'path';
import { fileURLToPath } from 'url';
import PaymentRouter from './router/paymentRouter.js';



configDotenv()
const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


app.use(cookieParser())
connectDB()

app.use('/products', ProductRouter)
app.use('/basket', BasketRouter)
app.use('/wishlist', WishlistRouter)
app.use('/charms', CharmsRouter)
app.use('/category', CategoryRouter)
app.use('/bracelet', BraceletRouter)
app.use('/necklaces', NecklacesRouter)
app.use('/rings', RingsRouter)
app.use('/collection', CollectionRouter)
app.use('/api/users', UserRoutes)
app.use('/api/payment', PaymentRouter); 


app.listen(5000, () => {
  console.log('backend ishleyr');
})
