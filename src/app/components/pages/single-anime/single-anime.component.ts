import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';

import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { ObjectNameInterface } from 'src/app/interfaces/objectName-interface';
import { RecInterface } from 'src/app/interfaces/rec-interface';
import { RecsResponseInterface } from 'src/app/interfaces/recsResponse-interface';
import { SingleAnimeResponseInterface } from 'src/app/interfaces/singleAnimeResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';
import { FavouritesService } from 'src/app/services/favourites.service';
import { FavAnimeInterface } from '../../modules/auth/auth-interfaces/favAnime-interface';

@Component({
  selector: 'app-single-anime',
  templateUrl: './single-anime.component.html',
  styleUrls: ['./single-anime.component.scss']
})
export class SingleAnimeComponent implements OnInit {
  animeData$!: Observable<AnimeInterface> | null;
  recsData$!: Observable<RecInterface[]> | null;
  favTemplate!: FavAnimeInterface;
  isFav: boolean = false;
  isReady: boolean = true;
  id: string = "";

  constructor(private animeService: AnimeApiService, private favService: FavouritesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.animeData$ = this.route.params.pipe(
      switchMap(res => {
        this.id = res['id'];
        return this.animeService.getSingleAnime(this.id)
      }),
      map((animeRes: SingleAnimeResponseInterface) => animeRes.data),
      tap((res: AnimeInterface) => {
        this.favTemplate = {
          'name': res.title_english ? res.title_english : res.title, 
          'src': res.images.jpg.large_image_url, 
          'id': res.mal_id
        }
        this.isFav = this.favService.isFav(this.favTemplate.name)
        this.recsData$= this.animeService.getRecomendations(this.id).pipe(
          map(res => res.data.slice(0,4))
        )
        this.isReady = true
      })
    )
  }

  onChangePage(): void {
    window.scrollTo({top: 0, behavior: "smooth"})
    this.isReady = false
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
