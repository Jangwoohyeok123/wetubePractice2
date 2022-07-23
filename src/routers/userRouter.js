import express from "express";
import {
  getEdit,
  postEdit,
  logout,
  see,
  getLogin,
  postLogin,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.route("/edit").get(getEdit).post(postEdit);
userRouter.get("/logout", logout);
userRouter.get(":id", see);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
export default userRouter;
