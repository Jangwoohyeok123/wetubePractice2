import express from "express";
import {
  see,
  edit,
  remove,
  upload,
  trending
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/trending", trending);
videoRouter.get("/upload", upload);
videoRouter.get("/:id", see); // id란? 동영상의 id를 말한다. // database와 같이 정리해야할 코드
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/remove", remove);


export default videoRouter;