import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject, of, throwError } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';
import { PokemonsEffects } from './pokemons.effects';
import { loadPokemons, filterPokemons, pokemonsLoaded, pokemonsLoadFailed } from '../actions/pokemons.actions';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonsEffects', () => {
  let actions$: ReplaySubject<any>;
  let effects: PokemonsEffects;
  let pokemonServiceMock: PokemonService;
  let pokemons: Pokemon[] = [
    { number: 1, name: 'bulbasaur' },
    { number: 2, name: 'ivysaur' }
  ];

  beforeEach(() => {
    pokemonServiceMock = jasmine.createSpyObj(
      'PokemonService',
      { all: of(pokemons) },
    );

    TestBed.configureTestingModule({
      providers: [
        PokemonsEffects,
        provideMockActions(() => actions$),
        {
          provide: PokemonService,
          useValue: pokemonServiceMock,
        }
      ]
    });
  });

  describe('loadPokemons$', () => {
    beforeEach(() => {
      actions$ = new ReplaySubject(1);
      actions$.next(loadPokemons());
    });

    it('invokes service and dispatches pokemon loaded on success', () => {
      effects = TestBed.inject(PokemonsEffects);

      effects.loadPokemons$.subscribe((result) => {
        expect(pokemonServiceMock.all).toHaveBeenCalled();

        expect(result).toEqual(pokemonsLoaded({ pokemons }));
      });
    });

    it('handles error', () => {
      const error = new Error('network error');
      const badService = jasmine.createSpyObj('PokemonService', {
        all: throwError(error),
      });

      TestBed.overrideProvider(PokemonService, {
        useValue: badService,
      });


      effects = TestBed.inject(PokemonsEffects);

      effects.loadPokemons$.subscribe((result) => {
        expect(badService.all).toHaveBeenCalled();

        expect(result).toEqual(pokemonsLoadFailed({ error }));
      });
    });
  });

  describe('filterPokemons$', () => {
    beforeEach(() => {
      actions$ = new ReplaySubject(1);
    });

    it('invokes service and filters results', () => {
      actions$.next(filterPokemons({ q: 'bulb' }));

      effects = TestBed.inject(PokemonsEffects);

      effects.filterPokemons$.subscribe((result) => {
        expect(pokemonServiceMock.all).toHaveBeenCalled();

        expect(result).toEqual(
          pokemonsLoaded({
            pokemons: [{ number: 1, name: 'bulbasaur' }],
          })
        );
      });
    });

    it('is case insensitive', () => {
      actions$.next(filterPokemons({ q: 'BULB' }));

      effects = TestBed.inject(PokemonsEffects);

      effects.filterPokemons$.subscribe((result) => {
        expect(pokemonServiceMock.all).toHaveBeenCalled();

        expect(result).toEqual(
          pokemonsLoaded({
            pokemons: [{ number: 1, name: 'bulbasaur' }],
          })
        );
      });
    });

    it('handles error', () => {
      const error = new Error('network error');
      const badService = jasmine.createSpyObj('PokemonService', {
        all: throwError(error),
      });

      TestBed.overrideProvider(PokemonService, {
        useValue: badService,
      });


      effects = TestBed.inject(PokemonsEffects);

      effects.filterPokemons$.subscribe((result) => {
        expect(badService.all).toHaveBeenCalled();

        expect(result).toEqual(pokemonsLoadFailed({ error }));
      });
    });
  });
});
