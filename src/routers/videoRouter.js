import express from "express";
import {
  home,
  watch,
  getEdit,
  postEdit,
  getUpload,
  postUpload,
  deleteVideo
} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get("/:id([0-9a-f]{24})", watch); // id란? 동영상의 id를 말한다. // database와 같이 정리해야할 코드
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;