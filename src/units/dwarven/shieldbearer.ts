import { Dwarven } from '../../races/dwarven';

class ShieldBearer extends Dwarven {

    constructor() {
        super('Shield Bearer', 0, 20);
    }

    skill(): string {
        return 'Reflect damage';
    }

}

export { ShieldBearer };
