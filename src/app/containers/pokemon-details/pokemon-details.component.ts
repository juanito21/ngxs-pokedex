import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {Select, Store} from "@ngxs/store";
import {PokemonDetailsSelector} from "../../states/pokemon-details/pokemon-details.selector";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {PokemonDetailsState} from "../../states/pokemon-details/pokemon-details.state";
import {Pokedex} from "../../states/pokedex/pokedex.actions";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    MatButton,
    AsyncPipe
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {

  @Select(PokemonDetailsSelector.imageUrl) imageUrl$: Observable<String>;
  @Select(PokemonDetailsSelector.nom) nom$: Observable<String>;

  constructor(private store: Store) {
  }

  add() {
    const pokemon = this.store.selectSnapshot(PokemonDetailsSelector.pokemon);
    this.store.dispatch(new Pokedex.Add(pokemon));
  }
}
