import { PokemonName } from './pokemon-name';

export class Types {
    slot: number;
    type: PokemonName;
    constructor(data: any = {}) {
        this.slot = data.slot;
        this.type = data.type;
    }
}