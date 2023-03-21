import { Pokemon } from '../models/pokemon.model';
import { pokemonsReducer, initialState } from './pokemons.reducer';
import { pokemonsLoaded } from '../actions/pokemons.actions';

describe('Pokemons Reducer', () => {
  describe('pokemonsLoaded', () => {
    it('updates pokemons state', () => {
      const payload = { pokemons: [{ number: 1, name: 'bulbasaur', }] }

      const result = pokemonsReducer(initialState, pokemonsLoaded(payload));

      expect(result.pokemons).toBe(payload.pokemons);
    });
  });
});
