import express from "express";
import morgan from "morgan";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); // 기본 default 값을 변경시킴 
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

/* => 
globalRouter => /
userRouter => edit
videoRouter => watch
*/

/*
서버가 하는일
1. router 연결 
2. view Engine 연결 (config 설정같은 느낌) + views 디렉토리 set 해놓기 
*/
