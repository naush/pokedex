import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { loadPokemons, pokemonsLoaded, pokemonsLoadFailed } from '../actions/pokemons.actions';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';

@Injectable()
export class PokemonsEffects {
  loadPokemons$ = createEffect(
    () => (
      this.actions$.pipe(
        ofType(loadPokemons),
        mergeMap(pokemonLoaded => (
          this.pokemonService
            .all()
            .pipe(
              map((pokemons: Pokemon[]) => pokemonsLoaded({ pokemons: pokemons })),
              catchError((error) => of(pokemonsLoadFailed(error)))
            )
        ))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
