import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { favoritesReducer, FavoritesState } from './favorites.reducer';


export interface State {
  favorites: FavoritesState,
}

export const reducers: ActionReducerMap<State> = {
  favorites: favoritesReducer,
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
