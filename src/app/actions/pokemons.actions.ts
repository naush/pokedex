import { Pokemon } from '../models/pokemon.model';
import { createAction, props } from '@ngrx/store';

export const loadPokemons = createAction(
  '[Pokemons] Load Pokemons'
);

export const pokemonsLoaded = createAction(
  '[Pokemons] Pokemons Loaded',
  props<{ pokemons: Pokemon[] }>()
);

export const pokemonsLoadFailed = createAction(
  '[Favorite] Pokemons Load Failed',
  props<{ error: any }>()
);
