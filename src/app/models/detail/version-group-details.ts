import { PokemonName } from './pokemon-name';

export class VersionGroupDetails {
    level_learned_at: number;
    move_learn_method: PokemonName;
    version_group: PokemonName;
    constructor(data: any = {}) {
        this.level_learned_at = data.level_learned_at;
        this.move_learn_method = data.move_learn_method;
        this.version_group = data.version_group;
    }
}