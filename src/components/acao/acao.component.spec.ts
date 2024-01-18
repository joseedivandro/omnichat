import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcaoComponent } from './acao.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcaoComponent', () => {
  let component: AcaoComponent;
  let fixture: ComponentFixture<AcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcaoComponent],
      imports: [HttpClientTestingModule]  // Importe o HttpClientTestingModule
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
