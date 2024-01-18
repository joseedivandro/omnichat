import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComediaComponent } from './comedia.component';
import { AppModule } from 'src/app/app.module';

describe('ComediaComponent', () => {
  let component: ComediaComponent;
  let fixture: ComponentFixture<ComediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule], // Certifique-se de importar o AppModule
      declarations: [ComediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
