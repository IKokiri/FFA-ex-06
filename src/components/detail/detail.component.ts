import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";
import { MoviesService } from "../../services/MoviesService";

@Component({
  selector: "detail-component",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent {
  id: string;
  nome: string;
  descricao: string;
  homePage: string;

  constructor(private route: ActivatedRoute, private movies: MoviesService) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.movies.getMoviesDetail(this.id).subscribe(data => {
      this.nome = data.original_title;
      this.descricao = data.overview;
      this.homePage = data.homepage;
    });
  }
}
