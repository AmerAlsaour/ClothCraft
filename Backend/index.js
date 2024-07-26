import express from "express";
const app = express();
import AuthRouter from "./route/authRouter.js";
const port = 5000;

const MONGO_URL = process.env.MONGO_URL
app.use(express.json());
import connectDb from "./db/connectDb.js"
app.use("/auth", AuthRouter);
connectDb(MONGO_URL);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
