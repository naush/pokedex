import { favoritesReducer, initialState } from './favorites.reducer';
import { favorite, unfavorite } from '../actions/favorite.actions';

describe('Favorites Reducer', () => {
  describe('favorite', () => {
    it('updates favorites state', () => {
      const payload = { number: 1 };

      const result = favoritesReducer(initialState, favorite(payload));

      expect(result.favorites).toContain(1);
    });
  });

  describe('unfavorite', () => {
    it('updates favorites state', () => {
      const payload = { number: 1 };
      const currentState = { favorites: [1, 2, 3] }

      const result = favoritesReducer(currentState, unfavorite(payload));

      expect(result.favorites).not.toContain(1);
    });
  });
});
