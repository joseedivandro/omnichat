import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.component.html',
  styleUrl: '../../styles.css'
})
export class AventuraComponent implements OnInit{


  constructor(
    private service: MovieApiServiceService,

  ) {

  }
  ngOnInit(): void {
    this.adventureMovie();
   
  }

  adventureMovieResult: any = [];


  // adventure
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }
}
