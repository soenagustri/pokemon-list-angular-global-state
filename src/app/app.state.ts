import { MyPokemon } from './models/my-pokemon';
import { PokemonName } from './models/detail/pokemon-name';
import { Pokemon } from './models/pokemon';

export interface AppState {
    readonly mypokemons: MyPokemon[];
    readonly pokemonLeft: PokemonName[];
    readonly pokemonRight: PokemonName[];
    readonly pokemonData: Pokemon;
}