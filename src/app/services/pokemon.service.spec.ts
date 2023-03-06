import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from './pokemon.service';

import allResponse from './fixtures/all.json';
import oneResponse from './fixtures/one.json';

// LO: [Testing] Services
describe('PokemonService', () => {
  let service: PokemonService;
  // LO: [Testing] HTTP
  let handler: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(PokemonService);
    handler = TestBed.inject(HttpTestingController);
  });

  describe('all', () => {
    it('gets a list of pokemon', (done: DoneFn) => {
      service.all().subscribe((response) => {
        expect(response.length).toBe(151);
        done();
      });

      const req = handler.expectOne(`${service.baseUrl}/pokedex/${service.region}`);

      req.flush(allResponse);
    });
  });

  describe('get', () => {
    it('gets one pokemon', (done: DoneFn) => {
      const pokemonNumber = 1;

      service.get(pokemonNumber).subscribe((response) => {
        expect(response).toBe(new Pokemon(oneResponse));

        done();
      });

      const req = handler.expectOne(`${service.baseUrl}/pokemon/${pokemonNumber}`);

      req.flush(oneResponse);
    });
  });
});
