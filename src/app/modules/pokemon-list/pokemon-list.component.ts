import { Component, OnInit } from '@angular/core';
import { PokemonName } from 'src/app/models/detail/pokemon-name';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as PokemonListActions from "./../../actions/pokemon-list.actions";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon = new Pokemon();
  listResult: Array<PokemonName> = [];
  listLeft: Array<PokemonName> = [];
  listRight: Array<PokemonName> = [];
  preload: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) {
    store.select('pokemonLeft').forEach(val=>{
      this.listLeft = val;
    });
    store.select('pokemonRight').forEach(val=>{
      this.listRight = val;
    });
    store.select('pokemonData').subscribe(val=>{
      this.pokemon = val;
    })
  }

  ngOnInit() {
    if (this.listLeft.length <=0) {
      this.getPokemon(()=>{
        this.preload = false;
      });
    } else {
      this.preload = false;
    }
    
  }

  getPokemon(callback?:()=>void) {
    let params = [
      {param:'offset', value:0},
      {param:'limit', value:40},
    ];
    let query = params.map(val => val.param + "=" + val.value).join('&');
    this.pokemonService.getAll(query).then(
      res => {
        if (res.ok) {
          // this.pokemon = res.data;
          this.store.dispatch(new PokemonListActions.AddPokemonData(res.data));
          let index = 1;
          for (const iterator of res.data.results) {
            if (index % 2 != 0) {
              this.store.dispatch(new PokemonListActions.AddPokemonLeft(iterator));
              // this.listLeft.push(iterator);
            } else {
              this.store.dispatch(new PokemonListActions.AddPokemonRight(iterator));
              // this.listRight.push(iterator);
            }
            index++;
          }
        }
        callback();
      },
      err => {
        console.error(err);
        callback();
      }
    ).catch(
      ex => {
        console.error(ex);
        callback();
      }
    )
  }

  getPokemonFromApi(callback?:()=>void) {
    let query = this.pokemon.next;
    this.pokemonService.getFromApi(query).then(
      res => {
        if (res.ok) {
          // this.pokemon = res.data;
          // this.pokemon.next = res.data.next;
          // this.pokemon.previous = res.data.previous;
          // this.listResult = res.data.results;
          this.store.dispatch(new PokemonListActions.AddPokemonData(res.data));
          let index = 1;
          for (const iterator of res.data.results) {
            if (index % 2 != 0) {
              this.store.dispatch(new PokemonListActions.AddPokemonLeft(iterator));
              // this.listLeft.push(iterator);
            } else {
              this.store.dispatch(new PokemonListActions.AddPokemonRight(iterator));
              // this.listRight.push(iterator);
            }
            index++;
          }
        }
        if (typeof callback == 'function') { callback(); }
          
      },
      err => {
        console.error(err);
        if (typeof callback == 'function') { callback(); }
      }
    ).catch(
      ex => {
        console.error(ex);
        if (typeof callback == 'function') { callback(); }
      }
    )
  }

}
