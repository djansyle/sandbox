import Router from 'koa-router';
const router = new Router();

router.get('/', (ctx: any) => {
    ctx.body = 'Hello, World';
});

export let rootRouter = router;
