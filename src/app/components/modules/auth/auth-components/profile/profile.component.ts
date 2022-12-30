import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavouritesService } from 'src/app/services/favourites.service';

import { AccountInterface } from '../../auth-interfaces/account-interface';
import { AuthService } from '../../auth-services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: AccountInterface;
  constructor(private authService: AuthService, private favService: FavouritesService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('CurUser') as string)
  }

  logOut(){
    this.authService.logOut(this.actRoute)
  }

  deleteFromFavs(event: MouseEvent,name: string){
    event.preventDefault()
    this.favService.deleteFromFav(name)
    this.user = JSON.parse(localStorage.getItem('CurUser') as string)
  }

}
