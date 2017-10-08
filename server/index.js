import 'babel-polyfill';
import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = KoaRouter();

// response
app.use(ctx => {
  console.log('ctx?', ctx)
  ctx.body = 'Hello Koa2';
});

app
  .use(router.routes())
  .use(router.allowedMethods());



router.get('/',  function *(next) {
  console.log('wat?') 
  this.body = 'Hello World!';
});

app.listen(3000);