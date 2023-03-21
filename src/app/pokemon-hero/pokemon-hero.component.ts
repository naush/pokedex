import { Component, Input, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pokemon } from '../models/pokemon.model';
import { State } from '../reducers';
import { favorite, unfavorite } from '../actions/favorite.actions';

@Component({
  selector: 'pokemon-hero',
  templateUrl: './pokemon-hero.component.html',
  styleUrls: ['./pokemon-hero.component.less']
})
export class PokemonHeroComponent {
  // LO: [Angular] Component Input
  @Input() pokemon!: Pokemon;
  @Input() showActions: boolean = false;
  @Input() isFavorite: boolean = false;

  constructor(private store: Store<State>) { }

  toggleFavorite(number: number) {
    if (this.isFavorite) {
      this.store.dispatch(unfavorite({ number }));
    } else {
      this.store.dispatch(favorite({ number }));
    }
  }
}
