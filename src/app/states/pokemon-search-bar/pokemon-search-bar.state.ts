import {Injectable} from '@angular/core';
import {Action, State, StateContext, Store} from '@ngxs/store';
import {PokemonDto} from "../../services/pokemon.dto";
import {PokemonSearchBar} from "./pokemon-search-bar.actions";
import {PokemonsSelector} from "../pokemons/pokemons.selector";

export interface PokemonSearchBarStateModel {
  filteredPokemons: PokemonDto[];
}

const defaults: PokemonSearchBarStateModel = {
  filteredPokemons: []
};

@State<PokemonSearchBarStateModel>({
  name: 'pokemonSearchBar',
  defaults
})
@Injectable()
export class PokemonSearchBarState {

  constructor(private store: Store) {
  }

  @Action(PokemonSearchBar.NewValue)
  newValue({ patchState }: StateContext<PokemonSearchBarStateModel>, { value }: PokemonSearchBar.NewValue) {
    const pokemons: PokemonDto[] = this.store.selectSnapshot(PokemonsSelector.pokemons);
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().startsWith(value.toLowerCase()));
    patchState({filteredPokemons});
  }

  @Action(PokemonSearchBar.Select)
  select({ patchState }: StateContext<PokemonSearchBarStateModel>, { value }: PokemonSearchBar.NewValue) {
    // TODO dispatch load pokemon details
  }
}
