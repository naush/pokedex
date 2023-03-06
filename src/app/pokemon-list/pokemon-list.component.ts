import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

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
      .subscribe((pokemons: Pokemon[]) => (
        this.pokemons = this.filterByName(pokemons, q)
      ));
  }

  private filterByName(pokemons: Pokemon[], q: string): Pokemon[] {
    return pokemons
      .filter((pokemon: Pokemon) => pokemon.name.includes(q.toLowerCase()));
  }
}
