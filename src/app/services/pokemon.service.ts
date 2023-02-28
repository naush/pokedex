import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl: string;
  pokemons!: Pokemon[];

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://pokeapi.co/api/v2';
  }

  public all() {
    return this.http.get<PokedexResponse>(`${this.baseUrl}/pokedex/kanto`).pipe(
      map((response: PokedexResponse) => {
        this.pokemons = response.pokemon_entries.map((pokemon_entry: any) => {
          return {
            number: pokemon_entry.entry_number,
            name: pokemon_entry.pokemon_species.name,
          }
        });

        return this.pokemons;;
      },
      catchError)
    );
  }

  public get(pokemonNumber: number): any {
    return this.pokemons.find(pokemon => pokemon.number === pokemonNumber);
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

export interface Pokemon {
  number: number;
  name: string;
  types?: string[];
}
