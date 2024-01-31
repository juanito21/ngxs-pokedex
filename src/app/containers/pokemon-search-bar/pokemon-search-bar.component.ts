import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatOptionModule, MatOptionSelectionChange} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {AsyncPipe} from "@angular/common";
import {Select, Store} from "@ngxs/store";
import {debounceTime, filter, Observable, tap} from "rxjs";
import {PokemonSearchBarSelector} from "../../states/pokemon-search-bar/pokemon-search-bar.selector";
import {PokemonDto} from "../../services/pokemon.dto";
import {PokemonSearchBar} from "../../states/pokemon-search-bar/pokemon-search-bar.actions";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-pokemon-search-bar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatInputModule,
    ReactiveFormsModule,
    AsyncPipe
  ],
  templateUrl: './pokemon-search-bar.component.html',
  styleUrl: './pokemon-search-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonSearchBarComponent {

  @Select(PokemonSearchBarSelector.filteredPokemons) filteredPokemons$: Observable<PokemonDto[]>;

  public pokemonCtrl = new FormControl("");

  constructor(private store: Store) {
    this.pokemonCtrl.valueChanges.pipe(
      takeUntilDestroyed(),
      debounceTime(250),
      filter((value: any) => typeof value === 'string'),
      tap(value => this.store.dispatch(new PokemonSearchBar.NewValue(value)))
    ).subscribe();
  }

  onSelect(event: MatOptionSelectionChange) {
    const pokemonSelected = event.source.value as PokemonDto;
    this.store.dispatch(new PokemonSearchBar.Select(pokemonSelected.id));
  }

  displayWith(pokemon: PokemonDto) {
    return pokemon.name;
  }
}
