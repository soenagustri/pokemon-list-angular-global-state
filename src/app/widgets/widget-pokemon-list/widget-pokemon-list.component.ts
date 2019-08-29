import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyPokemon } from 'src/app/models/my-pokemon';

@Component({
  selector: 'app-widget-pokemon-list',
  templateUrl: './widget-pokemon-list.component.html',
  styleUrls: ['./widget-pokemon-list.component.css']
})
export class WidgetPokemonListComponent implements OnInit {
  @Input() listLeft: Array<MyPokemon> = [];
  @Input() listRight: Array<MyPokemon> = [];
  @Input() removeBtn: boolean = false;
  @Output() delete = new EventEmitter<MyPokemon>();

  constructor() { }

  ngOnInit() {
  }

  onDelete(event) {
    this.delete.emit(event);
  }

}
