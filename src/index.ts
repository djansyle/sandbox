import Koa from 'koa';
import { rootRouter } from './routes/root';

const app = new Koa();

app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

app.listen(process.env.PORT || 3000);
