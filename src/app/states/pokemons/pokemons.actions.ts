import {PokemonDto} from "../../services/pokemon.dto";

export namespace Pokemons {
  export class Load {
    static readonly type = '[Pokemons] Load';
    constructor(public limit: number = 151) { }
  }

  export class LoadSuccess {
    static readonly type = '[Pokemons] Load Success';
    constructor(public response: PokemonDto[]) { }
  }

  export class LoadError {
    static readonly type = '[Pokemons] Load Error';
    constructor(public error: any) { }
  }

}

