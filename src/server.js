import express from "express";
import morgan from "morgan";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import rootRouter from "./routers/rootRouter";
import session from "express-session";

const app = express();
const logger = morgan("dev");
app.use(logger);
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views"); // 기본 default 값을 변경시킴 
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use(session({
  secret: "Hello",
  resave: true,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  })
});

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id} ${req.session.potato}`);
});


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
