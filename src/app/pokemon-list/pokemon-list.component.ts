import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { State } from '../reducers';
import { loadPokemons } from '../actions/pokemons.actions';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.less']
})
export class PokemonListComponent {
  pokemons!: Pokemon[];
  favorites!: number[];

  constructor(private pokemonService: PokemonService, private store: Store<State>) {}

  ngOnInit() {
    // LO: [NgRx] Store
    this.store
      .select(state => state.favorites)
      .subscribe(favs => this.favorites = favs.favorites);

    this.store
      .select(state => state.pokemons)
      .subscribe(pokes => this.pokemons = pokes.pokemons);

    this.store.dispatch(loadPokemons());
  }

  onQueryChange(q: string) {
    this.pokemonService.all()
      .subscribe((pokemons: Pokemon[]) => (
        this.pokemons = this.filterByName(pokemons, q)
      ));
  }

  isFavorite(pokemon: Pokemon): boolean {
    return this.favorites.includes(pokemon.number);
  }

  private filterByName(pokemons: Pokemon[], q: string): Pokemon[] {
    return pokemons
      .filter((pokemon: Pokemon) => pokemon.name.includes(q.toLowerCase()));
  }
}
