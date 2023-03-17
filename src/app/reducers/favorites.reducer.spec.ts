import { favoritesReducer, initialState } from './favorites.reducer';

describe('Favorites Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = favoritesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
