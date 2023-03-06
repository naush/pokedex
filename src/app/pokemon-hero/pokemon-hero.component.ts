import { Component, Input } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'pokemon-hero',
  templateUrl: './pokemon-hero.component.html',
  styleUrls: ['./pokemon-hero.component.less']
})
export class PokemonHeroComponent {
  // LO: [Angular] Component Input
  @Input() pokemon!: Pokemon;
}
