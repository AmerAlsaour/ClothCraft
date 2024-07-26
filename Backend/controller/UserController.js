import User from "../model/User.js"

export const getAllOrders = async ( req , res ) => {
  
  try {
    const userId = req.user._id
  console.log(userId , "userId");
  const orders = await User.find().select( 'username orders' )
  if(!orders){
    res.status(404).json({error:'Orders Not Found!'})
  }
  res.status(200).json(orders)
  console.log(orders , "orders");
  } catch (error) {
    console.log('Error In getAllOrders Function :' , error.message);
    res.status(500).json({error : "Internal Server Error!"})
    
  }
} 

