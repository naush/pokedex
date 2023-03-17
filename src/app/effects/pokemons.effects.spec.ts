import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PokemonsEffects } from './pokemons.effects';

describe('PokemonsEffects', () => {
  let actions$: Observable<any>;
  let effects: PokemonsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PokemonsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(PokemonsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
