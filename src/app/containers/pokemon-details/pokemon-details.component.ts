import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent {

}
