import { PokemonName } from '../models/detail/pokemon-name';
import * as PokemonListAction from './../actions/pokemon-list.actions';
import { Pokemon } from '../models/pokemon';

export function reducerLeft(state: PokemonName[] = [], action: PokemonListAction.Actions) {
    switch (action.type) {
        case PokemonListAction.ADD_POKEMON_LEFT:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}
export function reducerRight(state: PokemonName[] = [], action: PokemonListAction.Actions) {
    switch (action.type) {
        case PokemonListAction.ADD_POKEMON_RIGHT:
            return [
                ...state,
                action.payload
            ]
    
        default:
            return state;
    }
}
export function reducerData(state: Pokemon, action: PokemonListAction.Actions) {
    switch (action.type) {
        case PokemonListAction.ADD_POKEMON_DATA:
            return action.payload;
    
        default:
            return state;
    }
}