// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieApiServiceService } from './service/movie-api-service.service';

import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerComponent } from 'src/components/banner/banner.component';
import { EmAltaComponent } from 'src/components/em-alta/em-alta.component';
import { AcaoComponent } from 'src/components/acao/acao.component';
import { AventuraComponent } from 'src/components/aventura/aventura.component';
import { AnimacaoComponent } from 'src/components/animacao/animacao.component';
import { ComediaComponent } from 'src/components/comedia/comedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    MovieDetailsComponent,
    BannerComponent,
    EmAltaComponent,
    AcaoComponent,
    AventuraComponent,
    AnimacaoComponent,
    ComediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [MovieApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
