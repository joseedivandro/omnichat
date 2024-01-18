import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Adicione esta linha
import { BannerComponent } from 'src/components/banner/banner.component';
import { EmAltaComponent } from 'src/components/em-alta/em-alta.component';
import { AcaoComponent } from 'src/components/acao/acao.component';
import { AventuraComponent } from 'src/components/aventura/aventura.component';
import { AnimacaoComponent } from 'src/components/animacao/animacao.component';
import { ComediaComponent } from 'src/components/comedia/comedia.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        BannerComponent,
        EmAltaComponent,
        AcaoComponent,
        AventuraComponent,
        AnimacaoComponent,
        ComediaComponent,
      ],
      providers: [Title, Meta],
      imports: [HttpClientTestingModule], // Adicione esta linha
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
