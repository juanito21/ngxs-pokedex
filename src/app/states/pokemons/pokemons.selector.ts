import {Selector} from "@ngxs/store";
import {PokemonsState, PokemonsStateModel} from "./pokemons.state";
import {PokemonDto} from "../../services/pokemon.dto";

export class PokemonsSelector {

  @Selector([PokemonsState])
  static pokemons(state: PokemonsStateModel): PokemonDto[] {
    return state.pokemons;
  }
}
