import { PokemonName } from './pokemon-name';

export class Stats {
    base_stat: number;
    effort: number;
    stat: PokemonName;
    constructor(data: any = {}) {
        this.base_stat = data.base_stat;
        this.effort = data.effort;
        this.stat = data.stat;
    }
}