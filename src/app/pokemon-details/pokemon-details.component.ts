import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService, Pokemon } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.less']
})
export class PokemonDetailsComponent {
  pokemon!: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let pokemonNumber = paramMap.get('number')

        if (pokemonNumber) {
          this.pokemon = this.pokemonService.get(pokemonNumber);
        }
      })
  }
}
