import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonHeroComponent } from './pokemon-hero/pokemon-hero.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonHeroComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
