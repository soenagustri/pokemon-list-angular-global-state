import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject } from 'rxjs';
import { MyPokemon } from '../models/my-pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {  
  base_url:string = 'pokemon';

  // initial global state
  private readonly _myPokemon = new BehaviorSubject<MyPokemon[]>([]);

  readonly myPokemon$ = this._myPokemon.asObservable();

  private get myPokemon(): MyPokemon[] {
    return this._myPokemon.getValue();
  }
 
  private set myPokemon(val : MyPokemon[]) {
    this._myPokemon.next(val);
  }

  addMyPokemon(pokemon: MyPokemon) {
    this.myPokemon = [
      ...this.myPokemon,
      pokemon
    ]
  }

  removeMyPokemon(id:number) {
    this.myPokemon = this.myPokemon.filter(pokemon => pokemon.id != id);
  }

  // end initial global state
  

  constructor(private httpService: HttpService) { }

  getAll(query:string) {
    return this.httpService.get(this.base_url + "?" +query);
  }

  getFromApi(url:string) {
    return this.httpService.getFromApi(url);
  }

  getDetail(id:string) {
    return this.httpService.get(`${this.base_url}/${id}`);
  }

}
