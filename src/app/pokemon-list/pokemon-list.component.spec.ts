import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListComponent } from './pokemon-list.component';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;

  const pokemons: Pokemon[] = [
    {
      number: 1,
      name: 'bulbasaur',
    },
    {
      number: 2,
      name: 'ivysaur',
    },
    {
      number: 3,
      name: 'venusaur',
    },
  ];

  beforeEach(async () => {
    pokemonService = jasmine.createSpyObj<PokemonService>(
      'PokemonService',
      {},
      {
        all: () => of(pokemons),
      }
    );

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PokemonService,
          useValue: pokemonService,
        },
      ],
      declarations: [ PokemonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('sets #pokemons', () => {
    expect(component.pokemons).toBe(pokemons);
  });

  it('renders search bar', () => {
    const pokemonSearchBarComponent = fixture.debugElement.query(By.css('pokemon-search-bar'));
    expect(pokemonSearchBarComponent).toBeTruthy();
  });

  it('renders pokemon hero for each pokemon', () => {
    const pokemonSearchBarComponents = fixture.debugElement.queryAll(By.css('pokemon-hero'));
    expect(pokemonSearchBarComponents).toHaveSize(3);
  });

  describe('#onQueryChange', () => {
    it('filters pokemons by name', () => {
      component.onQueryChange('bulbasaur');

      expect(component.pokemons).toHaveSize(1);
    });

    it('handles uppercase', () => {
      component.onQueryChange('Bulbasaur');

      expect(component.pokemons).toHaveSize(1);
    });

    it('filters out all', () => {
      component.onQueryChange('none');

      expect(component.pokemons).toHaveSize(0);
    });
  });
});
