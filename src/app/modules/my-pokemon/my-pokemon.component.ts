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

  mypokemons: Observable<MyPokemon[]>;
  listLeft: MyPokemon[] = [];
  listRight: MyPokemon[] = [];

  constructor(
    private store: Store<AppState>
  ) {
    this.mypokemons = store.select('mypokemons');
  }

  ngOnInit() {
    this.mypokemons.forEach( pokemon => {
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

  deleteMyPokemon(index) {
    this.store.dispatch(new PokemonActions.RemovePokemon(index));
  }

  onDelete(event: PokemonButtonAction) {
    if (event.position=='left') {
      console.log("kiri: " + event.position);
    } else {
      console.log(event.position);
      
    }
  }

}
