import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let movieApiService: jasmine.SpyObj<MovieApiServiceService>;

  beforeEach(async () => {
    movieApiService = jasmine.createSpyObj('MovieApiServiceService', ['bannerApiData']);

    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: MovieApiServiceService, useValue: movieApiService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch banner data', () => {
    const mockBannerData = [{ title: 'Banner Movie 1' }, { title: 'Banner Movie 2' }];
    movieApiService.bannerApiData.and.returnValue(of({ results: mockBannerData }));

    component.ngOnInit();

    expect(component.bannerResult).toEqual(mockBannerData);
  });
});
