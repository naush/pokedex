import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { PokemonListComponent } from './pokemon-list.component';
import { loadPokemons, filterPokemons } from '../actions/pokemons.actions';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;
  let dispatch: any;

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

    const initialState = {
      pokemons: { pokemons },
      favorites: { favorites: [] },
    }

    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        {
          provide: PokemonService,
          useValue: pokemonService,
        },
        provideMockStore({ initialState } ),
      ],
      declarations: [ PokemonListComponent ]
    })
    .compileComponents();

    const store = TestBed.inject(MockStore);
    dispatch = spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('dispatches load pokemons', () => {
    expect(dispatch).toHaveBeenCalledWith(loadPokemons());
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
    it('dispatches the filter action with query', () => {
      const query = 'bulbasaur';

      component.onQueryChange(query);
      fixture.detectChanges();

      expect(dispatch).toHaveBeenCalledWith(filterPokemons({ q: query }));
    });
  });
});
