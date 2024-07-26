import express from "express";
import cors from 'cors'
import connectDb from "./db/connectDb.js"
import cookieParser from "cookie-parser";

// Routes // -------------------------------------
import AuthRouter from "./routes/authRouter.js";
import UserRouter from './routes/userRouter.js';
import OrderRouter from './routes/ordersRouter.js'
// -----------------------------------------------
const port = process.env.Port || 5000;
const app = express();
const MONGO_URL = process.env.MONGO_URL
// ---------------------------------------------
app.use(express.json());
app.use(cors({ origin:'http://localhost:3000', credentials:true }))


app.use(cookieParser())

app.use("/auth", AuthRouter);
app.use('/user' , UserRouter);
app.use('/order' , OrderRouter);

connectDb(MONGO_URL);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
