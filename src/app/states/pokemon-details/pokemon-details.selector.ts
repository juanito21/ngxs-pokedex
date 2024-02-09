import {Selector} from "@ngxs/store";
import {PokemonDetailsState, PokemonDetailsStateModel} from "./pokemon-details.state";
import {PokemonDto} from "../../services/pokemon.dto";

export class PokemonDetailsSelector {

  @Selector([PokemonDetailsState])
  static areDetailsEmpty(state: PokemonDetailsStateModel): boolean {
    return state.pokemon === undefined;
  }

  @Selector([PokemonDetailsState])
  static imageUrl(state: PokemonDetailsStateModel): String {
    return state.pokemon.image;
  }

  @Selector([PokemonDetailsState])
  static nom(state: PokemonDetailsStateModel): String {
    return state.pokemon.name;
  }

  @Selector([PokemonDetailsState])
  static pokemon(state: PokemonDetailsStateModel): PokemonDto {
    return state.pokemon;
  }
}
