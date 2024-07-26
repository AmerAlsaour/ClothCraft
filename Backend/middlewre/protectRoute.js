import jwt from 'jsonwebtoken'
import User from '../model/User.js'

export const protectRoute = async (req , res , next) => {
  try {
    const token = req.cookies.jwt
    // console.log(token , 'token');
    if(!token){
      return res.status(400).json('Unauthorized No Token Provided !')
    }

    const decoded = jwt.verify(token , process.env.JWT_SECRET)
    // console.log(decoded , 'decoded');
    if(!decoded){
      return res.status(400).json(' Unauthorized : Invalid Token !')
    }

    const user = await User.findById(decoded.userId).select('-password')
    // console.log(user._id , 'user');
    if(!user){
      return res.status(404).json('User Not Found !')
    }

    req.user = user
    next()

  } catch (error) {
    console.log('Error In ProtectRoute ' , error.message);
    res.status(500).json('Internal Server Error!')
  }
}