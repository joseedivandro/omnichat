import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrl: '../../styles.css'
})
export class AcaoComponent implements OnInit {

  constructor(
    private service: MovieApiServiceService,

  ) {

  }

  actionMovieResult: any = [];

  ngOnInit(): void {
    this.actionMovie();
  }

   // action
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }


}
