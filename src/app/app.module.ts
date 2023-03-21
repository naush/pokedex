import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonHeroComponent } from './pokemon-hero/pokemon-hero.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PokemonHeroNamePipe } from './pipes/pokemon-hero-name.pipe';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { PokemonsEffects } from './effects/pokemons.effects';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonHeroComponent,
    PokemonDetailsComponent,
    SearchBarComponent,
    PokemonHeroNamePipe,
    PokemonTypeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([PokemonsEffects]),
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
