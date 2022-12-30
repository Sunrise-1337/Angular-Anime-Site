import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountInterface } from '../auth-interfaces/account-interface';
import { FavAnimeInterface } from '../auth-interfaces/favAnime-interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isLoggedIn: boolean = false;
  regNote: string = '';
  logInNote: string = '';

  constructor(private router: Router) { }

  register(login: string, password: string) {
    let user = {'login': login, 'password': password, 'id': 1, 'favourites': []},
        users: AccountInterface[] = JSON.parse(localStorage.getItem('Users') as string),
        loginNotUsed: boolean = true;

    if (!users) {
      localStorage.setItem('Users', JSON.stringify([user]))
      this.regNote = 'Your account has been created'
    } else {
      users.forEach((el: AccountInterface) => {
        if (el.login === login) {
          this.regNote = 'This login is already in use'
          loginNotUsed = false
        }
      })
      
      if (loginNotUsed) {
        user['id'] = users.length + 1
        users.push(user)
        localStorage.setItem('Users', JSON.stringify(users))
        this.regNote = 'Your account has been created'
      }
    }
  }

  logIn(login: string, password: string, route: ActivatedRoute) {
    let users: AccountInterface[] = JSON.parse(localStorage.getItem('Users') as string),
        favs: FavAnimeInterface[] = JSON.parse(localStorage.getItem('Favourites') as string),
        num: number;


    if (users) {
      users.forEach((el, i) => {
        if (el.login === login && el.password === password) {
          this.logInNote = '';
          num = i;

          if (favs) {
            let usFav = users[num].favourites
    
            for (var i = 0; i < favs.length; i++) { 
              for (var j = 0; j < usFav.length; j++) { 
                if (favs[i].name === usFav[j].name) {
                  usFav.splice(j, 1)
                }
              }
            }
            
            users[num].favourites.push(...favs)
            localStorage.setItem('Users', JSON.stringify(users))  
            localStorage.setItem('CurUser', JSON.stringify(users[num])) 
            localStorage.removeItem('Favourites')
          } else {
            localStorage.setItem('CurUser', JSON.stringify(users[num]))
          }
          this.router.navigate(['profile'], {relativeTo: route})
        } else {
          this.logInNote = 'You have entered wrong login or password'
        }
      })
    }
  }

  logOut(route: ActivatedRoute){
    localStorage.removeItem('CurUser')
    this.router.navigate(['../'], {relativeTo: route})
  }

  getLoggValue(): boolean{
    return Boolean(localStorage.getItem('CurUser'))
  }

  getlogInNote(): string{
    return this.logInNote
  }

  getRegNote(): string{
    return this.regNote
  }

}
