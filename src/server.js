import express from "express";
import morgan from "morgan";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); // 기본 default 값을 변경시킴 
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => {
  console.log(`✅Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

/* => 
globalRouter => /
userRouter => edit
videoRouter => watch
*/
