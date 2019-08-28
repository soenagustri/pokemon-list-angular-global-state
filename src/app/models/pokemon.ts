import { PokemonName } from './detail/pokemon-name';

export class Pokemon {
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonName>;
    constructor(data: any = {}) {
        this.count = data.count;
        this.next = data.next;
        this.previous = data.previous;
        this.results = data.results;
    }
}