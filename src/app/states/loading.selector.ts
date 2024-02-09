import {Selector} from "@ngxs/store";
import {PokemonsState, PokemonsStateModel} from "./pokemons/pokemons.state";
import {PokemonDetailsState, PokemonDetailsStateModel} from "./pokemon-details/pokemon-details.state";

export class LoadingSelector {

  @Selector([PokemonsState, PokemonDetailsState])
  static globalLoading(pokemonsState: PokemonsStateModel, pokemonDetailsState: PokemonDetailsStateModel): boolean {
    return pokemonsState.loading || pokemonDetailsState.loading;
  }

}
