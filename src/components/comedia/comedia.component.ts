import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrl: '../../styles.css'
})
export class ComediaComponent implements OnInit {

  constructor(
    private service: MovieApiServiceService,

  ) {

  }

  comedyMovieResult: any = [];

  ngOnInit(): void {
   this.comedyMovie();
  }

  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

}
