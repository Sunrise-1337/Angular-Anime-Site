import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  animes$!: Observable<AnimeInterface[]>;
  request: string = "";

  constructor (private route: ActivatedRoute, private animeService: AnimeApiService) { }
	
  ngOnInit(): void {
    this.animes$ = this.route.queryParams.pipe(
      switchMap(res => 
        this.animeService
          .getSearchResults(res['request'])
          .pipe(
            map(res => res.data)
          )
      )
    )
  }
}
