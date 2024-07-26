import Order from "../model/Order.js";

export const makeOrder =async (req,res)=>{
    try {  
        const buyerId = req.user._id
        const { frontImage, backImage, color, size,frontElements,backElements } =req.body
        const order = new Order({buyerId,frontImage, backImage, color, size,frontElements,backElements})
        await order.save()
        res.status(201).json({message:"success"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
    
    
}


export const  getOrders = async (req,res)=>{
    try {
        const {username} = req.user
        if(username !== "medo")
            return res.status(401)
        const orders = await Order.find().populate('buyerId')
        res.status(200).json(orders)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server error"});
    }
} 