import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/app/models/pokemon-detail';
import { MyPokemon } from 'src/app/models/my-pokemon';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as PokemonActions from "./../../actions/pokemon.actions";
import swal from "sweetalert2";

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
    this.getParams((result) => {
      this.id = result;
      this.pokemonService.getDetail(this.id).then(
        res => {
          this.preload = false;

          this.pokemon = res.data;
          this.image = this.pokemon.sprites.front_default;
          this.types = this.pokemon.types.sort((a, b) => a.slot - b.slot).map(val => val.type.name).join(', ');
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

  getParams(callback?: (result?) => void) {
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
    let timerInterval
    let result = false;
    let mypokemon = new MyPokemon();
    swal.fire({
      title: 'Catch Pokemon!',
      html: 'Just a moment!',
      timer: 2000,
      onBeforeOpen: () => {
        swal.showLoading()
        var min = 1;
        var max = 100;
        var random = Math.random() * (+max - +min) + +min;
        if (parseInt(random.toString()) % 2 == 0) {
          result = true;
        }

        timerInterval = setInterval(() => { }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
        if (result) {
          swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: []
          }).queue([
            {
              title: 'Yeah! You caught it!',
              text: 'Please give the pokemon nickname',
            }
          ]).then((result) => {
            if (result.value) {
              mypokemon.alias = result.value[0];
              mypokemon.id = this.pokemon.id;
              mypokemon.name = this.pokemon.name;
              mypokemon.image = this.image;
              this.store.dispatch(new PokemonActions.AddPokemon(mypokemon));

              swal.fire({
                title: 'All done!',
                type: 'success',
                html:
                  'success add in your list pokemon: <pre><code>' +
                  JSON.stringify(result.value[0]) +
                  '</code></pre>',
                confirmButtonText: 'Lovely!'
              })
            }
          })
        } else {
          swal.fire({
            title: 'Sorry, missing!',
            text: 'catch pokemon again!',
            type: 'error'
          })
        }
      }
    });
    
    
   
    // this.pokemonService.addMyPokemon(mypokemon);
  }

}
