import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../services/pokemon.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent {
  cachedPokemons!: Pokemon[];
  pokemons!: Pokemon[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.all()
      .subscribe(pokemons => {
        this.cachedPokemons = pokemons;
        this.pokemons = pokemons;
      });
  }

  onQueryChange(q: string) {
    this.pokemons = this.cachedPokemons
      .filter((pokemon: Pokemon) => pokemon.name.includes(q.toLowerCase()));
  }
}
