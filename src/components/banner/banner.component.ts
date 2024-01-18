import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(
    private service: MovieApiServiceService,
    private title: Title,
    private meta: Meta
  ) {
    
  }

  bannerResult: any = [];

  ngOnInit(): void {
    this.bannerData();
  
  }

  // bannerdata
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
      console.log('result ta aqui',this.bannerResult);
    });
  }
}
