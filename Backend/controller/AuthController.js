import User from "../model/User.js"
import bcrypt from 'bcryptjs'
import { generateToken } from "../utils/generateToken.js"

// Signup Function // ------------------------------------------
export const SignUp = async (req , res) => {
   try {
     const {username  , email , password,phone,location } = req.body
     const emailExist = await User.findOne({email})
     if(emailExist){
       return res.status(400).json({error:' Email is Already Taken! '})
     }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     if(!emailRegex.test(email)){
       return res.status(400).json({error:'Invalid Email Format!'})   
      }
      // console.log(username);
      // console.log(",asjd");
      const userExist = await User.findOne({username})
      if(userExist){
        return res.status(400).json({error:'Username Already Exist!'})
      }
      const salt = await bcrypt.genSalt(10)
      const hashPassword = await bcrypt.hash(password , salt)
      const newUser = new User({
        email,
        username,
        password:hashPassword,
        phone,
        location
      })
      if(newUser){
        generateToken(newUser._id , res )
        await newUser.save()
        res.status(201).json(newUser)
      }
      else{
        res.status(400).json({error : 'Invalid User Data!'})
      }
     } catch (error) {
    console.log('Error in SignUp Function!' , error.message);
    res.status(500).json({error:'Internal Server Error!'})
   }
}

// Login Function // ------------------------------------------

export const Login = async (req , res) => {
  try {
    const {username , password} = req.body
    const user = await User.findOne({username})
    const isPasswordCorrect = await bcrypt.compare(password , user?.password  ,'')

    if(!user || !isPasswordCorrect){
      return res.status(400).json({error: 'Invalid Credentials!'})
    }
    
    generateToken(user._id , res)

    res.status(200).json({
      id:user._id,
      username:user.username
    })

  } catch (error) {
    console.log('Error in Login Function ' , error.message);
    res.status(500).json({error : 'Internal Server Error!'})
  }
}

// Logout Function // -------------------------------------------

export const Logout = async (req , res) => {
  try {
    res.cookie('jwt' , '' , {maxAge:0})
    res.status(200).json('Logged Out Successfully!')
  } catch (error) {
    console.log('Error in Logout Function !' , error.message);
    res.status(500).json({error : 'Internal Server Error !'})
  }
}