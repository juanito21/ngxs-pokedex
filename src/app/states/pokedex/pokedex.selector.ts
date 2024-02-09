import {PokemonDto} from "../../services/pokemon.dto";
import {Selector} from "@ngxs/store";
import {PokedexState, PokedexStateModel} from "./pokedex.state";

export class PokedexSelector {

  @Selector([PokedexState])
  static pokedex(state: PokedexStateModel): PokemonDto[] {
    return state.pokemons;
  }

  @Selector([PokedexSelector.pokedex])
  static pokedexSize(pokedex: PokemonDto[]): number {
    return pokedex.length;
  }

}
