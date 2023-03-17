import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { favoritesReducer, FavoritesState } from './favorites.reducer';
import { pokemonsReducer, PokemonsState } from './pokemons.reducer';


export interface State {
  favorites: FavoritesState,
  pokemons: PokemonsState,
}

export const reducers: ActionReducerMap<State> = {
  favorites: favoritesReducer,
  pokemons: pokemonsReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
