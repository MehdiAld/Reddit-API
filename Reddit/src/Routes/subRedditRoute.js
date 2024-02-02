import { Router } from "express";
import {
  ShowAllSubReddit,
  createSubReddit,
  DeleteSubReddit,
  addPostInSubReddit,
} from "../Controllers/subRedditController";
const SubRedditRouter = Router();

SubRedditRouter.get("/all", ShowAllSubReddit);

SubRedditRouter.post("/add", createSubReddit);

SubRedditRouter.delete("/delete/:subredditId", DeleteSubReddit);

SubRedditRouter.post("/:postId/add/:subredditId", addPostInSubReddit);

export default SubRedditRouter;
