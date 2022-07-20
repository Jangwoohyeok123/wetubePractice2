import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 4000;

const handleListening = () => {
  console.log(`✅Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

/* init module 에서 하는 일 1x 2x 
1. db 연결하기  + db model 파일들과 연결시켜 놓기 
2. port 연결하기 
3. init.js 모듈과 server.js import로 연결시키기
4. nodemon 이 init으로 script로 연결됨
  즉, init 파일을 server 모듈과 연결시키지 않으면
  nodemon이 서버의 변경에 대해서 인지를 할 수 없게 됨
*/