import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: any[];

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

  public get(): any[] {
    return this.pokemons;
  }
}
