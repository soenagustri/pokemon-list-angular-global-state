import { Action } from "@ngrx/store";
import { PokemonName } from '../models/detail/pokemon-name';
import { Pokemon } from '../models/pokemon';

export const ADD_POKEMON_LEFT    = "[POKEMON] Add Left";
export const ADD_POKEMON_RIGHT    = "[POKEMON] Add Right";
export const ADD_POKEMON_DATA    = "[POKEMON] Add Data";

export class AddPokemonLeft implements Action {
    readonly type = ADD_POKEMON_LEFT;

    constructor(public payload: PokemonName) { }
}

export class AddPokemonRight implements Action {
    readonly type = ADD_POKEMON_RIGHT;

    constructor(public payload: PokemonName) { }
}

export class AddPokemonData implements Action {
    readonly type = ADD_POKEMON_DATA;

    constructor(public payload: Pokemon) { }
}

export type Actions = AddPokemonLeft | AddPokemonRight | AddPokemonData