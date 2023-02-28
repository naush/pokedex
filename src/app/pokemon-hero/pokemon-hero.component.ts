import { Component, Input } from '@angular/core';
import { Pokemon } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-hero',
  templateUrl: './pokemon-hero.component.html',
  styleUrls: ['./pokemon-hero.component.less']
})
export class PokemonHeroComponent {
  @Input() pokemon!: Pokemon;
}
