import mongoose from "mongoose"


export const connectDB=async(req,res)=>{
    const connect=await mongoose.connect(process.env.mongodb_url)
    console.log(connect.connection.host);
    
}

// ngrahmdl777
// m3Yc3PE2jUpyh8KM
// mongodb_url=mongodb+srv://ngrahmdl777:m3Yc3PE2jUpyh8KM@cluster0.w7jcdpq.mongodb.net/