import {Component} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {Select} from "@ngxs/store";
import {Pokedex} from "../../states/pokedex/pokedex.actions";
import {PokedexSelector} from "../../states/pokedex/pokedex.selector";
import {Observable} from "rxjs";
import {PokemonDto} from "../../services/pokemon.dto";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-pokedex-grid',
  standalone: true,
  imports: [
    AgGridAngular,
    AsyncPipe
  ],
  templateUrl: './pokedex-grid.component.html',
  styleUrl: './pokedex-grid.component.scss'
})
export class PokedexGridComponent {

  @Select(PokedexSelector.pokedex) pokedex$: Observable<PokemonDto[]>;

  colDefs: any = [
    {field: "id"}, {field: "name"}
  ]

}
