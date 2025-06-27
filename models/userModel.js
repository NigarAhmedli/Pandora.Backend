import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    avatar: { type: String },
    role: { type: String, default: 'user' }
  },
  { timestamps: true }
);

// ✅ Parol yalnız dəyişəndə hash olunsun!
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); 
  }

  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// ✅ Parolu yoxlayan method
userSchema.methods.passwordControl = async function (password) {
  return await bcrypt.compare(password, this.password); 
};

const UserModel = mongoose.model('user', userSchema);
export default UserModel;
