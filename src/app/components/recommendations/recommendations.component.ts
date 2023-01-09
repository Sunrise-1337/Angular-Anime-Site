import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecInterface } from 'src/app/interfaces/rec-interface';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  @Input() recs!: RecInterface[] | null;
  @Output() changePage: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  toChangePage() {
    this.changePage.emit('')
  }

}
