import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  buyerId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  frontimage: { type: String },
  backimage: { type: String },
  baseShirt: {
    id: { type: mongoose.Schema.Types.ObjectId, ref: "TShirt" },
    color: String,
  },
  frontElements: [
    {
      customType: { type: String },
      src: { type: String },
      position: {
        x: { type: String },
        y: { type: String },
      },
      size: {
        width: { type: Number },
        height: { type: Number },
      },
      rotate: { type: Number },
      zindex: { type: Number },
    },
  ],
  backElements: [
    {
      customType: { type: String },
      src: { type: String },
      position: {
        x: { type: String },
        y: { type: String },
      },
      size: {
        width: { type: Number },
        height: { type: Number },
      },
      rotate: { type: Number },
      zindex: { type: Number },
      text:{
        text:String,
        color:String,
        font:String,
        size:String,
        isBold:Boolean,
        isItalic:Boolean
      },
    },
  ],
},{ timeStamps: true });

const Order = mongoose.model( 'Order' , orderSchema )

export default Order
