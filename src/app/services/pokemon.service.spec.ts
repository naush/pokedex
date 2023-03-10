import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';

import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from './pokemon.service';

import allResponse from '../spec//fixtures/all.json';
import oneResponse from '../spec/fixtures/one.json';

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
    it('responds with a list of pokemon', (done: DoneFn) => {
      service.all().subscribe((response) => {
        expect(response).toHaveSize(151);
        done();
      });

      const req = handler.expectOne(`${service.baseUrl}/pokedex/${service.region}`);

      req.flush(allResponse);
    });

    it('does not request again', (done: DoneFn) => {
      service.pokemons = [];

      service.all().subscribe((response) => {
        expect(response).toHaveSize(0);
        done();
      });

      handler.expectNone(`${service.baseUrl}/pokedex/${service.region}`);
    });

    it('handles error', (done: DoneFn) => {
      const error = { message: 'Service is down' }

      service.all().subscribe(
        (response) => { },
        (errorResponse) => {
          expect(errorResponse.error).toBe(error);
          expect(errorResponse.status).toBe(504);
          done();
        }
      );

      const req = handler.expectOne(`${service.baseUrl}/pokedex/${service.region}`);

      req.flush(error, { status: 504, statusText: 'Service Unavailable' });
    });
  });

  describe('get', () => {
    const pokemonNumber = 1;

    it('responds with one pokemon', (done: DoneFn) => {
      service.get(pokemonNumber).subscribe((response) => {
        expect(response).toEqual(new Pokemon(oneResponse));

        done();
      });

      const req = handler.expectOne(`${service.baseUrl}/pokemon/${pokemonNumber}`);

      req.flush(oneResponse);
    });

    it('handles error', (done: DoneFn) => {
      const error = { message: 'Service is down' }

      service.get(pokemonNumber).subscribe(
        (response) => { },
        (errorResponse) => {
          expect(errorResponse.error).toBe(error);
          expect(errorResponse.status).toBe(504);
          done();
        }
      );

      const req = handler.expectOne(`${service.baseUrl}/pokemon/${pokemonNumber}`);

      req.flush(error, { status: 504, statusText: 'Service Unavailable' });
    });
  });
});
