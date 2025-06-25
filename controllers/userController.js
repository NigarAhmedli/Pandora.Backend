import UserModel from "../models/userModel.js"
import { generateToken } from "../utils/generateToken.js";



const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Yeni qeydiyyat sorğusu gəldi:", req.body);

  // 1. Əgər istifadəçi varsa, xətanı qaytar
  const userExists = await UserModel.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'İstifadəçi artıq mövcuddur' });
  }

  // 2. Yeni istifadəçini yarat
  const newUser = await UserModel.create({ name, email, password });

  // 3. Token cookie-yə yaz 
  generateToken(res, newUser._id);

  // 4. İstifadəçi məlumatını frontend-ə qaytar
  res.status(201).json({
    _id: newUser._id,
    name: newUser.name,
    email: newUser.email,
  });
};


const authUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  if (user && await user.passwordControl(password)) {
    generateToken(res, user._id);

    // ✅ User məlumatlarını cavabla
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone || "",
      avatar: user.avatar || "",
       role: user.role || "user",
    });
  } else {
    return res.status(401).json({ message: 'Email və ya parol səhvdir' });
  }
};


const logoutUser=async(req,res)=>{
    res.cookie('jwt','', {
        httpOnly:true,
        expires:new Date (0)
    })
    res.json('logged out')
}

const getUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id); // Bütün məlumatları DB-dən götür

    if (user) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        avatar: user.avatar || "",
         role: user.role || "user" 
      });
    } else {
      return res.status(404).json({ message: 'İstifadəçi tapılmadı' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Serverdə xəta baş verdi' });
  }
};







const updateUserData = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;

      if (req.file) {
        user.avatar = `/uploads/${req.file.filename}`;
      }

      const updatedUser = await user.save();

      // 🔥 Ən vacib hissə: mütləq bütün sahələri qaytar
      return res.status(200).json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        phone: updatedUser.phone,
        avatar: updatedUser.avatar,
      });
    } else {
      return res.status(404).json({ message: 'İstifadəçi tapılmadı' });
    }
  } catch (error) {
    console.error("Update error:", error.message);
    return res.status(500).json({ message: 'Serverdə xəta baş verdi', error: error.message });
  }
};





export {createUser,authUser,logoutUser,getUser,updateUserData };