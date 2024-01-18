import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AventuraComponent } from './aventura.component';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AventuraComponent', () => {
  let component: AventuraComponent;
  let fixture: ComponentFixture<AventuraComponent>;
  let movieApiService: jasmine.SpyObj<MovieApiServiceService>;

  beforeEach(async () => {
    movieApiService = jasmine.createSpyObj('MovieApiServiceService', ['fetchAdventureMovies']);

    await TestBed.configureTestingModule({
      declarations: [AventuraComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MovieApiServiceService, useValue: movieApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AventuraComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch adventure movies', () => {
    const mockMovies = [{ title: 'Adventure Movie 1' }, { title: 'Adventure Movie 2' }];
    
    movieApiService.fetchAdventureMovies.and.returnValue(of({ results: mockMovies }));

    component.ngOnInit();

    expect(component.adventureMovieResult).toEqual(mockMovies);
  });
});
