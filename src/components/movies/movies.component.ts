import { Component } from "@angular/core";
import { MoviesService } from "../../services/MoviesService";

@Component({
  selector: "movies-component",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent {
  moviesTela = [];
  mov = [];

  constructor(private movies: MoviesService) {}

  ngOnInit() {
    this.movies.getPopular().subscribe(data => {
      this.moviesTela = data.results;
      this.mov = data.results;
    });

    this.movies.getMoviesDetail(1123).subscribe(data => {
      console.log(data);
    });
  }

  onChange(term) {
    this.moviesTela = this.mov.filter(filmes => {
      return filmes.original_title.toLowerCase().indexOf(term) > -1;
    });
  }
}
