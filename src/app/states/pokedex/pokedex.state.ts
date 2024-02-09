import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {PokemonDto} from "../../services/pokemon.dto";
import {Pokedex} from "./pokedex.actions";
import {insertItem, patch, removeItem} from "@ngxs/store/operators";

export interface PokedexStateModel {
  pokemons: PokemonDto[];
}

const defaults: PokedexStateModel = {
  pokemons: []
};

@State<PokedexStateModel>({
  name: 'pokedex',
  defaults
})
@Injectable()
export class PokedexState {
  @Action(Pokedex.Add)
  add({setState}: StateContext<PokedexStateModel>, {pokemon}: Pokedex.Add) {
    setState(
      patch({
          pokemons: insertItem<PokemonDto>(pokemon)
        }
      )
    )
  }

  @Action(Pokedex.Remove)
  remove({setState}: StateContext<PokedexStateModel>, {id}: Pokedex.Remove) {
    setState(
      patch({
          pokemons: removeItem<PokemonDto>((pokemon: PokemonDto) => pokemon.id === id)
        }
      )
    )
  }
}
