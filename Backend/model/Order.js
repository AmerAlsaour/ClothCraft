import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  buyerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  size:String,
  frontImage: { type: String },
  backImage: { type: String },
  baseShirt: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "TShirt" },
    color: String,
  },
  frontElements: [
    
    
  ],
  backElements: [
    
  ],
},{ timeStamps: true });

const Order = mongoose.model( 'Order' , orderSchema )

export default Order
