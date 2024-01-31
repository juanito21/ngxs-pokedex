import {Component, OnInit} from '@angular/core';
import {Store} from "@ngxs/store";
import {Pokemons} from "./states/pokemons/pokemons.actions";
import {PokemonSearchBar} from "./states/pokemon-search-bar/pokemon-search-bar.actions";
import {tap} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new Pokemons.Load(151));
  }
}
