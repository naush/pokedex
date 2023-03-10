import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Pokemon } from '../models/pokemon.model';

// LO: [Angular] Custom Pipe
@Pipe({name: 'heroName'})
export class PokemonHeroNamePipe implements PipeTransform {
  constructor(private titleCasePipe: TitleCasePipe) {}

  transform(pokemon: Pokemon): string {
    return `#${pokemon.number} ${this.titleCasePipe.transform(pokemon.name)}`;
  }
}
