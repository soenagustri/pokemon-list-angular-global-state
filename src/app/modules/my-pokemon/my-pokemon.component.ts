import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyPokemon } from 'src/app/models/my-pokemon';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as PokemonActions from 'src/app/actions/pokemon.actions'
import { PokemonButtonAction } from 'src/app/widgets/widget-pokemon-name/pokemon-button-action';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css']
})
export class MyPokemonComponent implements OnInit {
  count = 0;
  mypokemons: Observable<MyPokemon[]>;
  listLeft: MyPokemon[] = [];
  listRight: MyPokemon[] = [];

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.splitPokemon();
  }
  splitPokemon() {
    this.listLeft = [];
    this.listRight = [];
    this.mypokemons = this.store.select('mypokemons');
    this.mypokemons.forEach( pokemon => {
      this.count = pokemon.length;
      let index = 1;
      pokemon.forEach( val => {
        if (index % 2 != 0) {
          this.listLeft.push(val);
        } else {
          this.listRight.push(val);
        }
        index++;
      });
    });
  }

  onDelete(event: MyPokemon) {
    this.store.dispatch(new PokemonActions.RemovePokemon(event));
    this.splitPokemon(); 
  }

}
