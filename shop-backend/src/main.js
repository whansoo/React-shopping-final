require('dotenv').config();
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';
import api from './api';
import jwtMiddleware from './lib/jwtMiddleware';
import serve from 'koa-static';
import path from 'path';
import send from 'koa-send';

//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const { PORT, MONGO_URI } = process.env;


const app = new Koa();

const router = new Router();

mongoose
.connect(MONGO_URI)
.then(() => {
    console.log('Connected to MongoDB');
    // createFakeData();
})
.catch(e => {
    console.error(e);
});

app.use(bodyParser());
//라우터 적용 전에 bodyParser적용
//라우터 설정

app.use(jwtMiddleware);
router.use('/api', api.routes()); //api 라우트 적용




//app 인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

const buildDirectory = path.resolve(__dirname, '../build');
app.use(serve(buildDirectory));
app.use(async ctx => {
  // Not Found이고, 주소가 /api로 시작하지 않는 경우
  if (ctx.status === 404 && ctx.path.indexOf('/api') !== 0) {
    // index.html 내용을 반환
    await send(ctx, 'index.html', { root: buildDirectory });
  }
});

//PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port, ()=> {
    console.log('Listening to port %d', port);
})