import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { AnimacaoComponent } from './animacao.component';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

describe('AnimacaoComponent', () => {
  let component: AnimacaoComponent;
  let fixture: ComponentFixture<AnimacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimacaoComponent],
      imports: [HttpClientModule], 
      providers: [MovieApiServiceService], 
    }).compileComponents();
    
    fixture = TestBed.createComponent(AnimacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
