import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-animacao',
  templateUrl: './animacao.component.html',
  styleUrl: '../../styles.css'
})
export class AnimacaoComponent implements OnInit{

  constructor(
    private service: MovieApiServiceService,

  ) {
  
  }

  animationMovieResult: any = [];

  ngOnInit(): void {
    this.animationMovie();
  }

   // animation
   animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }

}
