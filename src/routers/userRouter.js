import express from "express";
import { edit, remove, logout, see, login } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/login", login);
userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get(":id", see);

export default userRouter;