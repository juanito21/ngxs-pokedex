import {Select, Selector} from "@ngxs/store";
import {PokemonSearchBarState, PokemonSearchBarStateModel} from "./pokemon-search-bar.state";
import {PokemonDto} from "../../services/pokemon.dto";
import {PokemonsSelector} from "../pokemons/pokemons.selector";

export class PokemonSearchBarSelector {

  @Selector([PokemonSearchBarState])
  static filteredPokemons(state: PokemonSearchBarStateModel): PokemonDto[] {
    return state.filteredPokemons;
  }

}
