import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPokemonComponent } from './my-pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { WidgetPokemonListModule } from 'src/app/widgets/widget-pokemon-list/widget-pokemon-list.module';

const routes: Routes = [
  {
    path: 'my-pokemon',
    component: MyPokemonComponent
  }
];

@NgModule({
  declarations: [MyPokemonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetPokemonListModule
  ],
  providers: [
    PokemonService
  ]
})
export class MyPokemonModule { }
