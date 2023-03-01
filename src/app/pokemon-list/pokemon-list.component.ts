import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../services/pokemon.service';


@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent {
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.all()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
      });
  }
}
