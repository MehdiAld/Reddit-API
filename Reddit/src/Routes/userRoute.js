import { Router } from "express";
import { createUser, connectUser } from "../Controllers/userController";
const userRouter = Router();

userRouter.post("/register", createUser);
userRouter.post("/login", connectUser);

export default userRouter;
