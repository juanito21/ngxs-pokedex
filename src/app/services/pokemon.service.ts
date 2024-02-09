import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {PokemonDto} from "./pokemon.dto";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokebuildapi.fr/api/v1';

  constructor(private httpClient: HttpClient) { }

  public getPokemons(number: number = 151): Observable<PokemonDto[]> {
    return this.httpClient.get<PokemonDto[]>(`${this.baseUrl}/pokemon/limit/${number}`).pipe(
      delay(1000)
    );
  }

  public getPokemon(id: number): Observable<PokemonDto> {
    return this.httpClient.get<PokemonDto>(`${this.baseUrl}/pokemon/${id}`).pipe(
      delay(1000)
    );
  }
}
