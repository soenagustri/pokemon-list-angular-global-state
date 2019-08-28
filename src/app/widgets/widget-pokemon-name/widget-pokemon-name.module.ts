import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetPokemonNameComponent } from './widget-pokemon-name.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [WidgetPokemonNameComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [WidgetPokemonNameComponent]
})
export class WidgetPokemonNameModule { }
