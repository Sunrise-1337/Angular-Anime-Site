import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServerResponseInterface } from '../interfaces/serverResponse-interface';
import { SingleAnimeResponseInterface } from '../interfaces/singleAnimeResponse-interface'
import { RecsResponseInterface } from '../interfaces/recsResponse-interface';
import { RandomAnimeResponseInterface } from '../interfaces/randomAnimeResponse-interface';
import { CharactersResponseInterface } from '../interfaces/charactersResponse-interface';
import { CompareRecsResponseInterface } from '../interfaces/compareRecsResponse-interface';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  link: string = "https://api.jikan.moe/v4/"

  constructor(private http: HttpClient) { }

  getSearchResults(request: string): Observable<ServerResponseInterface> {
    return this.http.get<ServerResponseInterface>(`${this.link}anime?q=${request}`)
  }

  getSingleAnime(id: string): Observable<SingleAnimeResponseInterface>{
    return this.http.get<SingleAnimeResponseInterface>(`${this.link}anime/${id}`)
  }

  getRecomendations(id: string): Observable<RecsResponseInterface>{
    return this.http.get<RecsResponseInterface>(`${this.link}anime/${id}/recommendations`)
  }

  getRandomAnimes(): Observable<RandomAnimeResponseInterface>{
    return this.http.get<RandomAnimeResponseInterface>(`${this.link}random/anime`)
  }

  getTopAnimes(): Observable<ServerResponseInterface>{
    return this.http.get<ServerResponseInterface>(`${this.link}top/anime`)
  }

  getTopCharacters(): Observable<CharactersResponseInterface>{
    return this.http.get<CharactersResponseInterface>(`${this.link}top/characters`)
  }

  getCompareRecomendations(): Observable<CompareRecsResponseInterface>{
    return this.http.get<CompareRecsResponseInterface>(`${this.link}recommendations/anime`)
  }
}
