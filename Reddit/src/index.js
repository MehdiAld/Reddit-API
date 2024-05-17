import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;

import userRouter from "./Routes/userRoute";
import postRouter from "./Routes/postRoute";
import SubRedditRouter from "./Routes/subRedditRoute";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log(`[DATABASE] MongoDB est connecté 💫!!`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => console.log("BIENVENUE SUR REDDIT"));

app.use("/subreddit", SubRedditRouter);
app.use("/posts", postRouter);
app.use("/auth", userRouter);
app.listen(port, () =>
  console.log(`[SERVER] is running on http://localhost:${port}`)
);
