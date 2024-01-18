// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';
// import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
// import { MovieDetailsComponent } from './movie-details.component';
// import { Title, Meta } from '@angular/platform-browser';
// import { of } from 'rxjs';

// describe('MovieDetailsComponent', () => {
//   let component: MovieDetailsComponent;
//   let fixture: ComponentFixture<MovieDetailsComponent>;
//   let service: jasmine.SpyObj<MovieApiServiceService>;
//   let router: ActivatedRoute;
//   let title: Title;
//   let meta: Meta;

//   beforeEach(() => {
//     const serviceSpy = jasmine.createSpyObj('MovieApiServiceService', ['getMovieDetails', 'getMovieVideo', 'getMovieCast']);

//     TestBed.configureTestingModule({
//       declarations: [MovieDetailsComponent],
//       providers: [
//         { provide: MovieApiServiceService, useValue: serviceSpy },
//         { provide: ActivatedRoute, useValue: {} },
//         { provide: Title, useValue: {} },
//         { provide: Meta, useValue: {} }
//       ]
//     });

//     fixture = TestBed.createComponent(MovieDetailsComponent);
//     component = fixture.componentInstance;
//     service = TestBed.inject(MovieApiServiceService) as jasmine.SpyObj<MovieApiServiceService>;
//     router = TestBed.inject(ActivatedRoute);
//     title = TestBed.inject(Title);
//     meta = TestBed.inject(Meta);
//   });

//   it('should create', () => {
//     service.getMovieDetails.and.returnValue(of({}));
//     service.getMovieVideo.and.returnValue(of({}));
//     service.getMovieCast.and.returnValue(of({}));

//     component.ngOnInit();

//     expect(component).toBeTruthy();
//   });

//   it('should handle getMovie result without depending on poster_path', () => {
//     service.getMovieDetails.and.returnValue(of({}));
//     service.getMovieVideo.and.returnValue(of({}));
//     service.getMovieCast.and.returnValue(of({}));

//     component.ngOnInit();

//     expect(component).toBeTruthy();
//   });
// });
