import { Router } from "express";
import {
  ShowAllSubReddit,
  createSubReddit,
  DeleteSubReddit,
  addPostInSubReddit,
  createPostInSubReddit,
} from "../Controllers/subRedditController";

import { authMiddleware } from "../middlewares/auth";
const SubRedditRouter = Router();

SubRedditRouter.get("/all", ShowAllSubReddit);

SubRedditRouter.post("/add", authMiddleware, createSubReddit);

SubRedditRouter.delete("/delete/:subredditId", authMiddleware, DeleteSubReddit);

SubRedditRouter.post("/:postId/add/:subredditId", authMiddleware, addPostInSubReddit);

SubRedditRouter.post("/add/:subredditId", authMiddleware, createPostInSubReddit);


export default SubRedditRouter;
