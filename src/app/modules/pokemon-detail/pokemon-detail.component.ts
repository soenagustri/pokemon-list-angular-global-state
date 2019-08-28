import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { MyPokemon } from 'src/app/models/my-pokemon';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as PokemonActions from "./../../actions/pokemon.actions";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  id: string;
  pokemon: PokemonDetail = new PokemonDetail();
  image: string = '';
  types: string = '';
  preload: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.getParams((result)=>{
      this.id = result;
      this.pokemonService.getDetail(this.id).then(
        res => {
          this.preload = false;
          
          this.pokemon = res.data;
          this.image = this.pokemon.sprites.front_default;
          this.types = this.pokemon.types.sort((a,b)=> a.slot - b.slot ).map(val => val.type.name).join(', ');
          this.pokemon.moves.sort((a, b) => a.move.name.toUpperCase() > b.move.name.toUpperCase() ? 1 : -1);
          this.pokemon.stats.sort((a, b) => a.stat.name.toUpperCase() > b.stat.name.toUpperCase() ? 1 : -1);
        },
        err => {
          console.error(err);
          this.preload = false;
        }
      ).catch(
        ex => {
          console.error(ex);
          this.preload = false;
        }
      )
    })
  }

  getParams(callback?:(result?)=>void){
    this.activatedRoute.params.subscribe(
      param => {
        callback(param['id'])
      }
    );
  }

  getFormatId(id) {
    if (id.toString().length == 1) {
      return `00${id}`;
    } else if (id.toString().length == 2) {
      return `0${id}`;
    } else {
      return id;
    }
  }

  addToMyPokemon() {
    let mypokemon = new MyPokemon();
    mypokemon.id = this.pokemon.id;
    mypokemon.name = this.pokemon.name;
    mypokemon.image = this.image;
    mypokemon.alias = this.pokemon.name;
    this.store.dispatch(new PokemonActions.AddPokemon(mypokemon));
    // this.pokemonService.addMyPokemon(mypokemon);
  }

}
