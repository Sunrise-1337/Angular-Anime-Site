import { Component, OnInit } from '@angular/core';

import { AnimeInterface } from 'src/app/interfaces/anime-interface';
import { CharacterInterface } from 'src/app/interfaces/character-interface';
import { CharactersResponseInterface } from 'src/app/interfaces/charactersResponse-interface';
import { ServerResponseInterface } from 'src/app/interfaces/serverResponse-interface';
import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  topAnimes: AnimeInterface[] = [];
  topCharacters: CharacterInterface[] = [];

  constructor(private animeService: AnimeApiService) { }

  ngOnInit(): void {
    this.animeService.getTopAnimes().subscribe((res: ServerResponseInterface) => this.topAnimes = res.data.slice(0, 18))
    this.animeService.getTopCharacters().subscribe((res: CharactersResponseInterface) => this.topCharacters = res.data.slice(0, 4))
  }

}
