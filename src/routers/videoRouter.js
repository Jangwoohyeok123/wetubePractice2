import express from "express";
import {
  home,
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get("/", home);
videoRouter.get("/:id(\\d+)", watch); // id란? 동영상의 id를 말한다. // database와 같이 정리해야할 코드
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;