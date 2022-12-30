import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule } from 'ng-carousel-cdk';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SingleAnimeComponent } from './components/pages/single-anime/single-anime.component';
import { PlayerComponent } from './components/player/player.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AnimeRecComponent } from './components/pages/anime-rec/anime-rec.component';
import { AuthModule } from './components/modules/auth/auth.module';
import { AnimeApiService } from './services/anime-api.service';
import { FavouritesService } from './services/favourites.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SingleAnimeComponent,
    PlayerComponent,
    RecommendationsComponent,
    ErrorComponent,
    SliderComponent,
    HomeComponent,
    AnimeRecComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule,
    AuthModule,
  ],
  providers: [AnimeApiService, FavouritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
