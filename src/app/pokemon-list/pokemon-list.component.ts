import { Component } from '@angular/core';
import { PokemonService, Pokemon } from '../services/pokemon.service';
import { filter } from 'rxjs/operators';

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
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons;
      });
  }

  onQueryChange(q: string) {
    this.pokemonService.all()
      .subscribe((pokemons: Pokemon[]) => {
        this.pokemons = pokemons
          .filter((pokemon: Pokemon) => pokemon.name.includes(q.toLowerCase()));
      });
  }
}
