import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PokemonName } from 'src/app/models/detail/pokemon-name';
import { PokemonButtonAction } from '../widget-pokemon-name/pokemon-button-action';

@Component({
  selector: 'app-widget-pokemon-list',
  templateUrl: './widget-pokemon-list.component.html',
  styleUrls: ['./widget-pokemon-list.component.css']
})
export class WidgetPokemonListComponent implements OnInit {
  @Input() listLeft: Array<PokemonName> = [];
  @Input() listRight: Array<PokemonName> = [];
  @Input() removeBtn: boolean = false;
  @Output() delete = new EventEmitter<PokemonButtonAction>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(event) {
    console.log(event);
    
    this.delete.emit(event);
  }

}
