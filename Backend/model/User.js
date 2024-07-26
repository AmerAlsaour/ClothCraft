import mongoose from "mongoose";
const Usermodel = mongoose.Schema(
  {
    email: { type: String, required: true },
    username: { type: String, require: true },
    password: { type: String, require: true },
    phone: { type: Number, require: true },
    location: { type: String, require: true },
    orders: [
      {
        id: { type: String},
        products: 
          {
            frontimage: { type: String},
            backimage: { type: String},
            baseShirt: {
              id:{ type: mongoose.Schema.Types.ObjectId,
              ref: "TShirt"},
              color: { type: String},
            },
            elements: [
              {
                customType: { type: String},
                src: { type: String},
                position: {
                  x: { type: String,},
                  y: { type: String,},
                },
                isface: { type: Boolean},
                size: {
                  width: { type: Number},
                  height: { type: Number},
                },
                rotate:{ type: Number},
                zindex: { type: Number}
              },
            ],
          },
        Date:{type:Date, default:Date.now()}
      },
    ],
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", Usermodel);
export default User;
