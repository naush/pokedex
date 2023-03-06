import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, of, Observable } from 'rxjs';
import { Pokemon, PokedexResponse, PokemonResponse } from '../models/pokemon.model';

// LO: [Angular] Dependency Injection & Services
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl: string = 'https://pokeapi.co/api/v2';
  region: string = 'kanto';
  pokemons!: Pokemon[];
  pokemon!: Pokemon;

  constructor(private http: HttpClient) {}

  public all(): Observable<Pokemon[]> {
    if (this.pokemons) {
      return of(this.pokemons);
    }

    // LO: [Angular] HTTP
    return this.http.get<PokedexResponse>(`${this.baseUrl}/pokedex/${this.region}`).pipe(
      map((response: PokedexResponse) => {
        this.pokemons = response.pokemon_entries.map((pokemon_entry: any) => {
          return {
            number: pokemon_entry.entry_number,
            name: pokemon_entry.pokemon_species.name,
          }
        });

        return this.pokemons;
      },
      catchError),
    );
  }

  public get(pokemonNumber: number): Observable<Pokemon> {
    return this.http.get<PokemonResponse>(`${this.baseUrl}/pokemon/${pokemonNumber}`).pipe(
      map((response: PokemonResponse) => {
        this.pokemon = new Pokemon(response);
        return this.pokemon;;
      },
      catchError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error.message);

    return throwError('A data error occurred, please try again.');
  }
}
