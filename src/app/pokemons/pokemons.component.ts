import { Component } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.less']
})
export class PokemonsComponent {
  pokemons: any[];

  constructor(private pokemonService: PokemonService) {
    this.pokemons = [];
  }

  ngOnInit() {
    this.pokemons = this.pokemonService.all();
  }
}
