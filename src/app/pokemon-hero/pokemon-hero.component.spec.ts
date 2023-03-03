import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHeroComponent } from './pokemon-hero.component';

xdescribe('PokemonHeroComponent', () => {
  let component: PokemonHeroComponent;
  let fixture: ComponentFixture<PokemonHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
