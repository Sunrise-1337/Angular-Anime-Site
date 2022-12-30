import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { ServerResponseInterface } from 'src/app/interfaces/serverResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  animes: AnimeInterface[] = [];
  request: string = "";

  constructor (private route: ActivatedRoute, private animeService: AnimeApiService) { }
	
  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      this.animeService
        .getSearchResults(res['request'])
        .subscribe((response: ServerResponseInterface) => {
          this.animes = response.data
        })
    })
  }
}
