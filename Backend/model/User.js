import mongoose from "mongoose";
const Usermodel = mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    phone: { type: Number, require: true },
    location: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", Usermodel);
export default User;
