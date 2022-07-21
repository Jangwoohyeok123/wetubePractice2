import express from "express";
import {
  edit,
  remove,
  logout,
  see,
  getLogin,
  postLogin,
  startGithubLogin,
  finishGithubLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.route("/login").get(getLogin).post(postLogin);
userRouter.get("/edit", edit);
userRouter.get("/logout", logout);
userRouter.get("/remove", remove);
userRouter.get(":id", see);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
export default userRouter;
