import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT;

import mongoose from "mongoose";
import userRouter from "./Routes/userRoute";
import SubRedditRouter from "./Routes/subRedditRoute";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log(`[DATABASE] MongoDB est connecté 💫!!`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => console.log("BIENVENUE SUR REDDIT"));

app.use("/subreddit", SubRedditRouter)
app.use("/auth", userRouter);
app.listen(port, () =>
  console.log(`[SERVER] is running on http://localhost:${port}`)
);
