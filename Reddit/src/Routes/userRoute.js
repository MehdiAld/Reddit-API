import { Router } from "express";
import {
  createUser,
  connectUser,
  disconnectUser,
} from "../Controllers/userController";
const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", connectUser);
userRouter.post("/disconnect", disconnectUser);

export default userRouter;
