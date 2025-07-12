import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'

const userControl = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: 'Token tapılmadı' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id).select('-password');
    next(); // burası vacibdir
  } catch (error) {
    console.log("Token xətası:", error.message);
    return res.status(401).json({ message: 'Token yanlışdır' });
  }
};


export default userControl