import { Dwarven } from '../../races/dwarven';

class Axeman extends Dwarven {

    constructor() {
        super('Axeman', 9, 11);
    }

    skill(): string {
        return 'Axe throw';
    }

}

export { Axeman };
