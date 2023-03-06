import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeDirective } from './pokemon-type.directive';

@Component({
  template: `<ul>
    <li pokemonType="fire"></li>
    <li pokemonType="unknown"></li>
  </ul>`
})
class TestComponent { }

// LO: [Testing] Attribute Directive
describe('PokemonTypeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({
        declarations: [ PokemonTypeDirective, TestComponent ]
      })
      .createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('sets background color', () => {
    const li = fixture.nativeElement.querySelector('li[pokemonType="fire"]');

    expect(li.style.backgroundColor).toBe(PokemonTypeDirective.TYPE_COLORS.get('fire'));
  });

  it('defaults unknown type to normal', () => {
    const li = fixture.nativeElement.querySelector('li[pokemonType="unknown"]');

    expect(li.style.backgroundColor).toBe(PokemonTypeDirective.TYPE_COLORS.get('normal'));
  });
});
