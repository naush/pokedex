import { Action, createReducer, on } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { pokemonsLoaded } from '../actions/pokemons.actions';


export const pokemonsFeatureKey = 'pokemons';

export interface PokemonsState {
  pokemons: Pokemon[];
}

export const initialState: PokemonsState = {
  pokemons: []
};

export const pokemonsReducer = createReducer(
  initialState,
  on(pokemonsLoaded, (state: PokemonsState, { pokemons }) => {
    return { pokemons };
  }),
);

