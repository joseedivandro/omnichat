import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterModule.forRoot([])]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const brandElement = compiled.querySelector('.navbar-brand');
    
    // Verifique se o elemento .navbar-brand não é nulo antes de verificar o conteúdo
    expect(brandElement).toBeTruthy();

    // Verifique o conteúdo somente se o elemento não for nulo
    if (brandElement) {
      expect(brandElement.textContent).toContain('OMNIFLIX');
    }
  });
});
