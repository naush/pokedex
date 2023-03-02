import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonHeroComponent,
    PokemonDetailsComponent,
    SearchBarComponent,
    PokemonHeroNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
