import express from "express";
import {
  see,
  edit,
  remove,
  upload,
  trending,
  getUpload,
  postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/trending", trending);
videoRouter.get("/upload", upload);
videoRouter.get("/:id(\\d+)", see); // id란? 동영상의 id를 말한다. // database와 같이 정리해야할 코드
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);
videoRouter.route("/Sexupload").get(getUpload).post(postUpload);

export default videoRouter;