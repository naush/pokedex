import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { PokemonHeroNamePipe } from '../pipes/pokemon-hero-name.pipe';
import { PokemonHeroComponent } from './pokemon-hero.component';

describe('PokemonHeroComponent', () => {
  let component: PokemonHeroComponent;
  let fixture: ComponentFixture<PokemonHeroComponent>;
  const pokemon = { name: 'Pikachu', number: 25, types: ['electric'] };

  beforeEach(async () => {
    const initialState = {
      favorites: { favorites: [] },
    }

    await TestBed.configureTestingModule({
      providers: [
        {
          provide: TitleCasePipe,
          useValue: new TitleCasePipe(),
        },
        provideMockStore({ initialState }),
      ],
      declarations: [
        PokemonHeroComponent,
        PokemonHeroNamePipe,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    TestBed.inject(MockStore);

    fixture = TestBed.createComponent(PokemonHeroComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemon;
    fixture.detectChanges();
  });

  it('includes pokemon types in title case', () => {
    pokemon.types.forEach((type: string) => {
      expect(fixture.nativeElement.textContent).toContain(
        new TitleCasePipe().transform(type)
      );
    });
  });

  it('includes pokemon number', () => {
    // LO: [Testing] Text Content
    expect(fixture.nativeElement.textContent).toContain(pokemon.number);
  });

  it('includes pokemon name', () => {
    expect(fixture.nativeElement.textContent).toContain(pokemon.name);
  });
});
