import { Router } from "express";
import {
  showALLPost,
  createPost,
  editPost,
  removePost,
} from "../Controllers/postController";

import { authMiddleware } from "../middlewares/auth";
const postRouter = Router();

postRouter.get("/all", showALLPost);

postRouter.post("/add", authMiddleware, createPost);

postRouter.put("/edit/:id", authMiddleware, editPost);

postRouter.delete("/delete/:id", authMiddleware, removePost);

export default postRouter;
