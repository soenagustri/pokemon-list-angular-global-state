import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyPokemon } from 'src/app/models/my-pokemon';

@Component({
  selector: 'app-widget-pokemon-name',
  templateUrl: './widget-pokemon-name.component.html',
  styleUrls: ['./widget-pokemon-name.component.css']
})
export class WidgetPokemonNameComponent implements OnInit {
  @Input() pokemon: MyPokemon;
  @Input() removeBtn: boolean = false;
  @Output() delete = new EventEmitter<MyPokemon>();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.pokemon);
  }

}
