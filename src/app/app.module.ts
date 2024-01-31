import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {NgxsModule} from "@ngxs/store";
import {PokemonsState} from "./states/pokemons/pokemons.state";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {PokemonService} from "./services/pokemon.service";
import {PokemonSearchBarState} from "./states/pokemon-search-bar/pokemon-search-bar.state";
import {PokemonSearchBarComponent} from "./containers/pokemon-search-bar/pokemon-search-bar.component";
import {PokemonDetailsState} from "./states/pokemon-details/pokemon-details.state";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxsModule.forRoot([PokemonsState, PokemonSearchBarState, PokemonDetailsState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    PokemonSearchBarComponent,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {}
