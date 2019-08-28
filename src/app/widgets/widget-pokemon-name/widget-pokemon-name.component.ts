import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonName } from 'src/app/models/detail/pokemon-name';
import { PokemonButtonAction } from './pokemon-button-action';

@Component({
  selector: 'app-widget-pokemon-name',
  templateUrl: './widget-pokemon-name.component.html',
  styleUrls: ['./widget-pokemon-name.component.css']
})
export class WidgetPokemonNameComponent implements OnInit {
  @Input() pokemon: PokemonName;
  @Input() removeBtn: boolean = false;
  @Input() index: number;
  @Input() position: string;
  @Output() delete = new EventEmitter<PokemonButtonAction>();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit({position:this.position, index:this.index});
  }

}
