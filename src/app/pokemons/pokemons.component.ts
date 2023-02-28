import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../services/pokemon.service';


@Component({
  selector: 'pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.less']
})
export class PokemonsComponent {
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.all()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }
}
