import { Injectable } from '@angular/core';
import { AccountInterface } from '../components/modules/auth/auth-interfaces/account-interface';

import { FavAnimeInterface } from '../components/modules/auth/auth-interfaces/favAnime-interface';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  constructor() { }

  isFav(name: string) {
    let favs: FavAnimeInterface[] | null = JSON.parse(localStorage.getItem('Favourites') as string),
        userFavs: FavAnimeInterface[] | null = JSON.parse(localStorage.getItem('CurUser') as string).favourites,
        result: boolean = false;

    if (favs) favs.filter(el => el.name === name ? result = true : null)
    if (userFavs) userFavs.filter(el => el.name === name ? result = true : null)

    return result
  }

  toggleFav(arg: boolean, anime: FavAnimeInterface) {
    let favs = JSON.parse(localStorage.getItem('Favourites') as string),
        user = JSON.parse(localStorage.getItem('CurUser') as string),
        base = user ? user.favourites : favs,
        list = base ? base : [];

    if (arg) {
      list.forEach((el: FavAnimeInterface, i: number) => {
        if (el.name == anime.name) list.splice(i, 1)
      })
    } else {
      list.push(anime)
    }
    
    if (user) {
      user.favourites = list
      let users = JSON.parse(localStorage.getItem('Users') as string)
      users[user.id] = user
      localStorage.setItem('Users', JSON.stringify(users))  
      localStorage.setItem('CurUser', JSON.stringify(user))  
    } else {
      localStorage.setItem('Favourites', JSON.stringify(list))
    }
  }

  deleteFromFav(title: string) {
    let favs: FavAnimeInterface[] = JSON.parse(localStorage.getItem('Favourites') as string),
        user: AccountInterface = JSON.parse(localStorage.getItem('CurUser') as string),
        users: AccountInterface[] = JSON.parse(localStorage.getItem('Users') as string),
        base = user ? user.favourites : favs,
        list = base ? base : [];

    list.forEach((el: FavAnimeInterface, i: number) => {
      if (el.name == title) list.splice(i, 1)
    })

    user.favourites = list
    localStorage.setItem('CurUser', JSON.stringify(user)) 
    users[user.id] = user
    localStorage.setItem('Users', JSON.stringify(users))   
  }
}
