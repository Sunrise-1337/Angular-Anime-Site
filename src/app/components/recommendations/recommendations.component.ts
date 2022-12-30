import { Component, Input, OnInit } from '@angular/core';
import { RecInterface } from 'src/app/interfaces/rec-interface';
import { RecsResponseInterface } from 'src/app/interfaces/recsResponse-interface';

import { AnimeApiService } from 'src/app/services/anime-api.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  recs: RecInterface[] = [];
  @Input() id!: string;

  constructor(private service: AnimeApiService) { }

  ngOnInit(): void {
    this.service.getRecomendations(this.id).subscribe((res: RecsResponseInterface) => this.recs = res.data.slice(0,4))
  }

}
