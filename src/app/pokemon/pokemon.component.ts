import { Component, Input } from '@angular/core';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.less']
})
export class PokemonComponent {
  @Input() pokemon: any;
}
