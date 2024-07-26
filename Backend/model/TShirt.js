import mongoose from "mongoose";
const TShirtmodel = mongoose.Schema({
  name: { type: String , required: true },
  price:{ type: Number, required: true },
  colors:{type:String , enum:['blue' , 'green' , 'white' , 'black']
}});
const TShirt = mongoose.model("TShirt", TShirtmodel);
export default TShirt;
