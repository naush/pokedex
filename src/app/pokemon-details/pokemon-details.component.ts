import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

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
        let pokemonNumber = Number(paramMap.get('number'))

        if (pokemonNumber) {
          this.pokemonService.get(pokemonNumber)
            .subscribe((pokemon: Pokemon) => {
              this.pokemon = pokemon;
            });
        }
      })
  }
}
