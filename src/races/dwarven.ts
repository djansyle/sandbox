import { Race } from '../contracts/race';

abstract class Dwarven implements Race {

    race: string = 'dwarf';
    name: string;
    attack: number;
    defense: number;

    constructor(name: string, attack: number, defense: number) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
    }

    getStats(): string {
        return `Attack: ${this.attack}\nDefense: ${this.defense}`;
    }

    abstract skill(): string;
}

export { Dwarven };
