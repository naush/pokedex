import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { PokemonService } from '../services/pokemon.service';
import { PokemonsEffects } from './pokemons.effects';

// TODO: Write legit tests.
describe('PokemonsEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonsEffects;
  let pokemonServiceMock: PokemonService;
  let pokemons: any[];

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

    effects = TestBed.inject(PokemonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
