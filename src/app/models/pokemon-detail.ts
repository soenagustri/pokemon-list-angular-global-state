import { Moves } from './detail/moves';
import { Types } from './detail/types';
import { Stats } from './detail/stats';
import { Sprites } from './detail/sprites';

export class PokemonDetail {
    id: number;
    name: string;
    order: number;
    is_default: boolean;
    base_experience: number;
    height: number;
    weight: number;
    moves: Array<Moves>;
    types: Array<Types>;
    stats: Array<Stats>;
    sprites: Sprites;
    constructor(data: any = {}) {
        this.id = data.id;
        this.name = data.name;
        this.order = data.order;
        this.is_default = data.is_default;
        this.base_experience = data.base_experience;
        this.height = data.height;
        this.weight = data.weight;
        this.moves = data.moves;
        this.types = data.types;
        this.stats = data.stats;
        this.sprites = data.sprites;
    }
}