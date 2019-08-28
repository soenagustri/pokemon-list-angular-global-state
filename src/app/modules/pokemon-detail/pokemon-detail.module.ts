import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { WidgetPreloaderModule } from 'src/app/widgets/widget-preloader/widget-preloader.module';

const routes: Routes = [
  {
    path: 'pokemon/:id',
    component: PokemonDetailComponent
  }
];

@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    WidgetPreloaderModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonDetailModule { }
