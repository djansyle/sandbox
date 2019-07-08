import Router from 'koa-router';
import { ShieldBearer } from '../units/dwarven/shieldbearer';
import { Axeman } from '../units/dwarven/axeman';

const router = new Router();

let shieldbearer = new ShieldBearer();
let axeman = new Axeman();

router.get('/dwarven/shieldbearer', (ctx: any) => {
    ctx.body = {
        status: 'success',
        data: shieldbearer
    };
});

router.get('/dwarven/axeman', (ctx: any) => {
    ctx.body = {
        status: 'success',
        data: axeman
    };
});

router.get('/dwarven', (ctx: any) => {
    ctx.body = {
        status: 'success',
        data: [shieldbearer, axeman]
    };
});

export let dwarvenRouter = router;
