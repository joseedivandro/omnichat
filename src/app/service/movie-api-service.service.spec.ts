import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha

import { MovieApiServiceService } from './movie-api-service.service';

describe('MovieApiServiceService', () => {
  let service: MovieApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Adicione esta linha
    });
    service = TestBed.inject(MovieApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
