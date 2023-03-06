import { TitleCasePipe } from '@angular/common';

import { PokemonHeroNamePipe } from './pokemon-hero-name.pipe';

// LO: [Testing] Pipes
describe('PokemonHeroNamePipe', () => {
  const titleCasePipe = new TitleCasePipe();
  const pipe = new PokemonHeroNamePipe(titleCasePipe);

  it('concatenates pokemon number and name', () => {
    const pokemon = { name: 'Pikachu', number: 25 }

    expect(pipe.transform(pokemon)).toBe('#25 Pikachu');
  });

  it('titlecases pokemon name', () => {
    const pokemon = { name: 'pikachu', number: 25 }

    expect(pipe.transform(pokemon)).toBe('#25 Pikachu');
  });
});
