import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { CharacterInterface } from 'src/app/interfaces/character-interface';
import { CharactersResponseInterface } from 'src/app/interfaces/charactersResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topAnimes$!: Observable<AnimeInterface[]>;
  topCharacters$!: Observable<CharacterInterface[]>;

  constructor(private animeService: AnimeApiService) { }

  ngOnInit(): void {
    this.topAnimes$ = this.animeService.getTopAnimes().pipe(
      map(res => res.data.slice(0, 18))
    )
    this.topCharacters$ = this.animeService.getTopCharacters().pipe(
      map((res: CharactersResponseInterface) => res.data.slice(0, 4))
    )
  }
}