import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmAltaComponent } from './em-alta.component';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { HttpClientModule } from '@angular/common/http'; 

describe('EmAltaComponent', () => {
  let component: EmAltaComponent;
  let fixture: ComponentFixture<EmAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmAltaComponent],
      imports: [HttpClientModule], 
      providers: [MovieApiServiceService], 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
