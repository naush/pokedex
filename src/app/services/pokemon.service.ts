import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError, of, Observable } from 'rxjs';

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

  public all() {
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
        this.pokemon = {
          number: response.id,
          name: response.name,
          height: response.height,
          weight: response.weight,
          stats: response.stats,
          types: response.types.map(t => t.type.name),
        }

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

interface PokedexResponse {
  description: any[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: string[];
  pokemon_entries: any[];
  region: any;
  version_groups: any[];
}

interface PokemonResponse {
  id: number;
  name: string;
  height: number;
  weight: number;
  stats: any;
  types: any[];
}

export interface Pokemon {
  number: number;
  name: string;
  height?: number;
  weight?: number;
  stats?: any;
  types?: string[];
}
