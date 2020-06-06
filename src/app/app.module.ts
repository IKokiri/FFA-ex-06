import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "../modules/AppRoutingModule";
import { HelloRoute } from "../components/HelloRoute";
import { TitleComponent } from "../components/title/title.component";
import { SearchComponent } from "../components/search/search.component";
import { MoviesComponent } from "../components/movies/movies.component";
import { ImgComponent } from "../components/img/img.component";
import { Start } from "../components/Start";
import { DetailComponent } from "../components/detail/detail.component";
import { TextoComponent } from "../components/texto/texto.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloRoute,
    TitleComponent,
    SearchComponent,
    MoviesComponent,
    ImgComponent,
    DetailComponent,
    TextoComponent,
    Start
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
