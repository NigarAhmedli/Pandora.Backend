import mongoose from "mongoose"


export const connectDB=async(req,res)=>{
    const connect=await mongoose.connect(process.env.mongodb_url)
    console.log(connect.connection.host);
    
}

//  ngrahmdl777
//  m3Yc3PE2jUpyh8KM
//  mongodb_url=mongodb+srv://ngrahmdl777:m3Yc3PE2jUpyh8KM@cluster0.w7jcdpq.mongodb.net

//  JWT_SECRET=sp203
//  STRIPE_SECRET_KEY=sk_test_51RbbUPD7OZmBZ6FqmCxX8QRqLaEPBVVfsDH73fortftyvxCvuJF6KnwnyhFsMZKQzTvj60kS3QWbUzSh8GD20LBw00cE6iup9W