import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavAnimeInterface } from '../../auth-interfaces/favAnime-interface';

@Component({
  selector: 'app-profile-favourites',
  templateUrl: './profile-favourites.component.html',
  styleUrls: ['./profile-favourites.component.scss']
})
export class ProfileFavouritesComponent implements OnInit {
  @Input favs!: FavAnimeInterface[] | null;

  @Output delFav: EventEmitter<string></string>;

  constructor() { }

  ngOnInit(): void {
  }

}
