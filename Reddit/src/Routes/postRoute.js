import { Router } from "express";
import {
  showALLPost,
  createPost,
  editPost,
  removePost,
} from "../Controllers/postController";
const postRouter = Router();

postRouter.get("/all", showALLPost);

postRouter.post("/add", createPost);

postRouter.get("/edit/", editPost);

postRouter.delete("/delete/", removePost);

export default postRouter;
