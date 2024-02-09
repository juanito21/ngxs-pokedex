import {PokemonDto} from "../../services/pokemon.dto";

export namespace Pokedex {

  export class Add {
    static readonly type = '[Pokedex] Add';
    constructor(public pokemon: PokemonDto) { }
  }

  export class Remove {
    static readonly type = '[Pokedex] Remove';
    constructor(public id: number) { }
  }
}
