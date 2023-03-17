import { createAction, props } from '@ngrx/store';

export const favorite = createAction(
  '[Favorite] Favorite Pokemon',
  props<{ number: number }>()
);

export const unfavorite = createAction(
  '[Favorite] Unfavorite Pokemon',
  props<{ number: number }>()
);

export const favoriteSuccess = createAction(
  '[Favorite] Favorite Success',
  props<{ data: any }>()
);

export const favoriteFailure = createAction(
  '[Favorite] Favorite Failure',
  props<{ error: any }>()
);

export const unfavoriteSuccess = createAction(
  '[Favorite] Unfavorite Success',
  props<{ data: any }>()
);

export const unfavoriteFailure = createAction(
  '[Favorite] Unfavorite Failure',
  props<{ error: any }>()
);
