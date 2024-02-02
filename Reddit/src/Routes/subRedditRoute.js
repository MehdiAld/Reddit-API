import { Router } from "express";
import {
  ShowAllSubReddit,
  createSubReddit,
  DeleteSubReddit,
} from "../Controllers/subRedditController";
const SubRedditRouter = Router();

SubRedditRouter.get("/all", ShowAllSubReddit);

SubRedditRouter.post("/add", createSubReddit);

SubRedditRouter.delete("/delete/:subredditId", DeleteSubReddit);

export default SubRedditRouter;
