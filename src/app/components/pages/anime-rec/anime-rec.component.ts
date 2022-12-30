import { Component, OnInit } from '@angular/core';
import { AnimeApiService } from 'src/app/services/anime-api.service';
import { CompareRecInterface } from 'src/app/interfaces/compareRec-interface';
import { CompareRecsResponseInterface } from 'src/app/interfaces/compareRecsResponse-interface';

@Component({
  selector: 'app-anime-rec',
  templateUrl: './anime-rec.component.html',
  styleUrls: ['./anime-rec.component.scss']
})
export class AnimeRecComponent implements OnInit {
  animeRecs: CompareRecInterface[] = []
  
  constructor(private animeService: AnimeApiService) { }

  ngOnInit(): void {
    this.animeService.getCompareRecomendations().subscribe((res: CompareRecsResponseInterface) => this.animeRecs = res.data.slice(0, 18))
  }

}
