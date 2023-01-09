import { Component, OnInit } from '@angular/core';
import { AnimeApiService } from 'src/app/services/anime-api.service';
import { CompareRecInterface } from 'src/app/interfaces/compareRec-interface';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-anime-rec',
  templateUrl: './anime-rec.component.html',
  styleUrls: ['./anime-rec.component.scss']
})
export class AnimeRecComponent implements OnInit {
  animeRecs$!: Observable<CompareRecInterface[]>;
  
  constructor(private animeService: AnimeApiService) { }

  ngOnInit(): void {
    this.animeRecs$ = this.animeService.getCompareRecomendations().pipe(
      map(res => res.data.slice(0, 18))
    )
  }

}
