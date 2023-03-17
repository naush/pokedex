import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadPokemons, filterPokemons, pokemonsLoaded, pokemonsLoadFailed } from '../actions/pokemons.actions';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonsEffects {
  loadPokemons$ = createEffect(
    () => (
      this.actions$.pipe(
        ofType(loadPokemons),
        mergeMap(() => (
          this.pokemonService
            .all()
            .pipe(
              map((pokemons: Pokemon[]) =>
                pokemonsLoaded(
                  { pokemons: pokemons }
                )
              ),
              catchError((error) => of(pokemonsLoadFailed(error)))
            )
        ))
      )
    )
  );

  filterPokemons$ = createEffect(
    () => (
      this.actions$.pipe(
        ofType(filterPokemons),
        mergeMap(({ q }) => (
          this.pokemonService
            .all()
            .pipe(
              map((pokemons: Pokemon[]) =>
                pokemonsLoaded(
                  { pokemons: this.filterByName(pokemons, q) }
                )
              ),
              catchError((error) => of(pokemonsLoadFailed(error)))
            )
        ))
      )
    )
  );

  private filterByName(pokemons: Pokemon[], q: string): Pokemon[] {
    return pokemons
      .filter((pokemon: Pokemon) => pokemon.name.includes(q.toLowerCase()));
  }

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
