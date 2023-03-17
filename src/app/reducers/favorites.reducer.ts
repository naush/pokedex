import { Action, createReducer, on } from '@ngrx/store';
import { favorite, unfavorite } from '../actions/favorite.actions';


export const favoritesFeatureKey = 'favorites';

export interface FavoritesState {
  favorites: number[];
}

export const initialState: FavoritesState = {
  favorites: []
};

export const favoritesReducer = createReducer(
  initialState,
  on(favorite, (state: FavoritesState, { number }) => {
    return {
      ...initialState,
      favorites: [...state.favorites, number],
    };
  }),
  on(unfavorite, (state: FavoritesState, { number } ) => {
    return {
      ...initialState,
      favorites: state.favorites.filter((favorite) => favorite !== number),
    };
  }),
);
