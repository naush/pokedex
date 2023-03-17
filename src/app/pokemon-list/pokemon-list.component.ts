import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { State } from '../reducers';
import { loadPokemons, filterPokemons } from '../actions/pokemons.actions';

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
    this.store.dispatch(loadPokemons());

    // LO: [NgRx] Store
    this.store
      .select(state => state.favorites)
      .subscribe(favs => this.favorites = favs.favorites);

    this.store
      .select(state => state.pokemons)
      .subscribe(pokes => this.pokemons = pokes.pokemons);
  }

  onQueryChange(q: string) {
    this.store.dispatch(filterPokemons({ q }));
  }

  isFavorite(pokemon: Pokemon): boolean {
    return this.favorites.includes(pokemon.number);
  }
}
