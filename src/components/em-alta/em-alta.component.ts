import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-em-alta',
  templateUrl: './em-alta.component.html',
  styleUrl: '../../styles.css'
})
export class EmAltaComponent implements OnInit {

  constructor(
    private service: MovieApiServiceService,
   
  ) {
    
  }

  trendingMovieResult: any = [];

  ngOnInit(): void {
    this.trendingData();
    
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
      // this.trendingMovieResult
    });
  }

}
