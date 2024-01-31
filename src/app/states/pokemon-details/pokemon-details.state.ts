import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {PokemonDetails} from './pokemon-details.actions';
import {PokemonDto} from "../../services/pokemon.dto";
import {Pokemons} from "../pokemons/pokemons.actions";
import {catchError, tap} from "rxjs";
import {PokemonService} from "../../services/pokemon.service";

export interface PokemonDetailsStateModel {
  loading: boolean;
  errorMessage: string;
  pokemon: PokemonDto;
}

const defaults: PokemonDetailsStateModel = {
  pokemon: undefined,
  loading: false,
  errorMessage: undefined
};

@State<PokemonDetailsStateModel>({
  name: 'pokemonDetails',
  defaults
})
@Injectable()
export class PokemonDetailsState {

  constructor(private pokemonService: PokemonService) {
  }
  @Action(PokemonDetails.Load)
  load({dispatch, patchState}: StateContext<PokemonDetailsStateModel>, {id}: PokemonDetails.Load) {
    patchState({loading: true, errorMessage: undefined})
    return this.pokemonService.getPokemon(id).pipe(
      tap(pokemons => dispatch(new PokemonDetails.LoadSuccess(pokemons))),
      catchError(error => dispatch(new PokemonDetails.LoadError(error)))
    );
  }

  @Action(PokemonDetails.LoadSuccess)
  loadSuccess({patchState}: StateContext<PokemonDetailsStateModel>, {response}: PokemonDetails.LoadSuccess) {
    patchState({loading: false, pokemon: response});
  }

  @Action(PokemonDetails.LoadError)
  loadError({patchState}: StateContext<PokemonDetailsStateModel>, {error}: Pokemons.LoadError) {
    patchState({loading: false, errorMessage: JSON.stringify(error)});
  }
}
