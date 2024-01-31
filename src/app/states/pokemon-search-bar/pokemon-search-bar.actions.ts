export namespace PokemonSearchBar {

  export class NewValue {
    static readonly type = '[PokemonSearchBar] New Value';
    constructor(public value: string) { }
  }

  export class Select {
    static readonly type = '[PokemonSearchBar] Select';
    constructor(public selected: number) { }
  }

}
