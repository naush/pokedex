import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { PokemonDetailsComponent } from './pokemon-details.component';

// LO: [Testing] Component
describe('PokemonDetailsComponent', () => {
  let component: PokemonDetailsComponent;
  let fixture: ComponentFixture<PokemonDetailsComponent>;
  let pokemonService: PokemonService;

  const pokemon: Pokemon = {
    number: 1,
    name: 'bulbasaur',
    stats: [ { stat: { name: 'hp' }, base_stat: 10, } ]
  };

  beforeEach(async () => {
    pokemonService = jasmine.createSpyObj<PokemonService>(
      'PokemonService',
      {},
      {
        get: (number: number) => of(pokemon),
      }
    );

    await TestBed.configureTestingModule({
      // LO: [Testing] Shallow Render
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        PokemonDetailsComponent,
      ],
      imports: [
        RouterModule,
      ],
      providers: [
        {
          provide: PokemonService,
          useValue: pokemonService,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ number: '1' })),
          }
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders pokemon hero', () => {
    const pokemonHeroComponent = fixture.debugElement.query(By.css('pokemon-hero'));
    expect(pokemonHeroComponent).toBeTruthy();
  });

  it('sets #pokemon', () => {
    expect(component.pokemon).toBe(pokemon);
  });
});
