import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title, Meta } from '@angular/platform-browser';
import { BannerComponent } from 'src/components/banner/banner.component';
import { EmAltaComponent } from 'src/components/em-alta/em-alta.component';
import { AcaoComponent } from 'src/components/acao/acao.component';
import { AventuraComponent } from 'src/components/aventura/aventura.component';
import { AnimacaoComponent } from 'src/components/animacao/animacao.component';
import { ComediaComponent } from 'src/components/comedia/comedia.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  @ViewChild(BannerComponent) bannerComponent!: BannerComponent;
  @ViewChild(EmAltaComponent) emAltaComponent!: EmAltaComponent;
  @ViewChild(AcaoComponent) acaoComponent!: AcaoComponent;
  @ViewChild(AventuraComponent) aventuraComponent!: AventuraComponent;
  @ViewChild(AnimacaoComponent) animacaoComponent!: AnimacaoComponent;
  @ViewChild(ComediaComponent) comediaComponent!: ComediaComponent;

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    this.title.setTitle('Home - showtime');
    this.meta.updateTag({
      name: 'description',
      content: 'watch online movies',
    });
  }


  ngOnInit(): void {
   
  }

}
