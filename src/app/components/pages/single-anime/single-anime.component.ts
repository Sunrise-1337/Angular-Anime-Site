import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { ObjectNameInterface } from 'src/app/interfaces/objectName-interface';
import { SingleAnimeResponseInterface } from 'src/app/interfaces/singleAnimeResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { FavAnimeInterface } from '../../modules/auth/auth-interfaces/favAnime-interface';

@Component({
  selector: 'app-single-anime',
  templateUrl: './single-anime.component.html',
  styleUrls: ['./single-anime.component.scss']
})
export class SingleAnimeComponent implements OnInit, OnDestroy {
  pageIsReady: boolean = false;
  animeData!: AnimeInterface;
  favTemplate!: FavAnimeInterface;
  isFav: boolean = false;
  id: string = "";

  constructor(private animeService: AnimeApiService, private favService: FavouritesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.
      subscribe(res => {
        this.id = res['id'];
        this.pageIsReady = false
        this.animeService
        .getSingleAnime(this.id)
        .subscribe((animeRes: SingleAnimeResponseInterface) => {
          this.animeData = animeRes.data;
          this.pageIsReady = true
          this.favTemplate = {
            'name': this.animeData.title_english ? this.animeData.title_english : this.animeData.title, 
            'src': this.animeData.images.jpg.large_image_url, 
            'id': this.animeData.mal_id
          }
          this.isFav = this.favService.isFav(this.favTemplate.name)
        })
      })
  }

  ngOnDestroy(){
    this.pageIsReady = false
  }

  getString(arr: ObjectNameInterface[]){
    let result: string[] = [];
    arr.forEach(el => {result.push(el.name)})
    return result.join(', ')
  }

  toggleFav() {
    this.favService.toggleFav(this.isFav, this.favTemplate)
    this.isFav = !this.isFav
  }

}
