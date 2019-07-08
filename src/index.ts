import Koa from 'koa';
import { rootRouter } from './routes/root';
import { dwarvenRouter } from './routes/dwarven';

const app = new Koa();

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.use(dwarvenRouter.routes());
app.use(dwarvenRouter.allowedMethods());

app.listen(process.env.PORT || 3000);
