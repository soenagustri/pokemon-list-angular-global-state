import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './widgets/navbar/navbar.component';
import { PokemonListComponent } from './modules/pokemon-list/pokemon-list.component';
import { WidgetPokemonListModule } from './widgets/widget-pokemon-list/widget-pokemon-list.module';
import { PokemonService } from './services/pokemon.service';
import { HttpModule } from '@angular/http';
import { WidgetPreloaderModule } from './widgets/widget-preloader/widget-preloader.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from './reducers/pokemon.reducer';
import { MyPokemonModule } from './modules/my-pokemon/my-pokemon.module';
import { PokemonDetailModule } from './modules/pokemon-detail/pokemon-detail.module';
import { reducerLeft, reducerRight, reducerData } from './reducers/pokemon-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokemonListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    WidgetPokemonListModule,
    WidgetPreloaderModule,
    MyPokemonModule,
    PokemonDetailModule,
    StoreModule.forRoot({
      mypokemons: reducer,
      pokemonLeft: reducerLeft,
      pokemonRight: reducerRight,
      pokemonData: reducerData
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
