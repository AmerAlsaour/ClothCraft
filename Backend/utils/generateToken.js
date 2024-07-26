import jwt from 'jsonwebtoken'
import dotenv from "dotenv";
dotenv.config()

export const generateToken = (userId , res) => {
  const token = jwt.sign({userId} , process.env.MY_SECRET,{
    expiresIn:'5d'
  })

  res.cookie('jwt' , token ,{
    httpOnly:true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
    sameSite:'strict'
  })
}