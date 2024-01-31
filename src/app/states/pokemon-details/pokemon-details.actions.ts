import {PokemonDto} from "../../services/pokemon.dto";

export namespace PokemonDetails {
  export class Load {
    static readonly type = '[PokemonDetails] Load';
    constructor(public id: number) { }
  }

  export class LoadSuccess {
    static readonly type = '[PokemonDetails] Load Success';
    constructor(public response: PokemonDto) { }
  }

  export class LoadError {
    static readonly type = '[PokemonDetails] Load Error';
    constructor(public error: any) { }
  }
}

