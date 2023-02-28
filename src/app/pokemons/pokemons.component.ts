import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.less']
})

export class PokemonsComponent {
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
}
