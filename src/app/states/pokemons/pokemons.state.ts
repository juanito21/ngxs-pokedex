import {Injectable} from '@angular/core';
import {Action, State, StateContext} from '@ngxs/store';
import {Pokemons} from './pokemons.actions';
import {PokemonDto} from "../../services/pokemon.dto";
import {PokemonService} from "../../services/pokemon.service";
import {catchError, tap} from "rxjs";

export interface PokemonsStateModel {
  loading: boolean;
  errorMessage: string;
  pokemons: PokemonDto[];
}

const defaults: PokemonsStateModel = {
  loading: false,
  errorMessage: undefined,
  pokemons: []
};

@State<PokemonsStateModel>({
  name: 'pokemons',
  defaults
})
@Injectable()
export class PokemonsState {

  constructor(private pokemonService: PokemonService) {
  }

  @Action(Pokemons.Load)
  load({dispatch, patchState}: StateContext<PokemonsStateModel>, {limit}: Pokemons.Load) {
    patchState({loading: true, errorMessage: undefined})

    return this.pokemonService.getPokemons(limit).pipe(
      tap(pokemons => dispatch(new Pokemons.LoadSuccess(pokemons))),
      catchError(error => dispatch(new Pokemons.LoadError(error)))
    );
  }

  @Action(Pokemons.LoadSuccess)
  loadSuccess({patchState}: StateContext<PokemonsStateModel>, {response}: Pokemons.LoadSuccess) {
    patchState({loading: false, pokemons: response});
  }

  @Action(Pokemons.LoadError)
  loadError({patchState}: StateContext<PokemonsStateModel>, {error}: Pokemons.LoadError) {
    patchState({loading: false, errorMessage: JSON.stringify(error)});
  }
}
