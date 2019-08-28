import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetPokemonListComponent } from './widget-pokemon-list.component';
import { WidgetPokemonNameModule } from '../widget-pokemon-name/widget-pokemon-name.module';

@NgModule({
  declarations: [WidgetPokemonListComponent],
  imports: [
    CommonModule,
    WidgetPokemonNameModule
  ],
  exports: [WidgetPokemonListComponent]
})
export class WidgetPokemonListModule { }
