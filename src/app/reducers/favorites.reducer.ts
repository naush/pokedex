import { Action, createReducer, on } from '@ngrx/store';
import { favorite, unfavorite } from '../actions/favorite.actions';


export interface FavoritesState {
  favorites: number[];
}

export const initialState: FavoritesState = {
  favorites: []
};

// LO: [NgRx] Reducer
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
