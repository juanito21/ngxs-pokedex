import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Pokemons} from "./states/pokemons/pokemons.actions";
import {PokemonSearchBar} from "./states/pokemon-search-bar/pokemon-search-bar.actions";
import {Observable, tap} from "rxjs";
import {PokemonDetailsSelector} from "./states/pokemon-details/pokemon-details.selector";
import {LoadingSelector} from "./states/loading.selector";
import {PokedexSelector} from "./states/pokedex/pokedex.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  @Select(PokemonDetailsSelector.areDetailsEmpty) areDetailsEmpty$: Observable<boolean>;
  @Select(LoadingSelector.globalLoading) globalLoading$: Observable<boolean>;
  @Select(PokedexSelector.pokedexSize) pokedexSize$: Observable<number>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new Pokemons.Load(151));
  }
}
