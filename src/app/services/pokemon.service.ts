import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[];

  constructor() {
    this.pokemons = [
      {
        number: '0001',
        name: 'Bulbasaur',
        types: ['Grass', 'Poison'],
      },
      {
        number: '0002',
        name: 'Ivysaur',
        types: ['Grass', 'Poison'],
      },
      {
        number: '0003',
        name: 'Venusaur',
        types: ['Grass', 'Poison'],
      },
    ];
  }

  public all(): Pokemon[] {
    return this.pokemons;
  }

  public get(pokemonNumber: string): any {
    return this.pokemons.find(pokemon => pokemon.number === pokemonNumber);
  }
}

export interface Pokemon {
  number: string;
  name: string;
  types: string[];
}
