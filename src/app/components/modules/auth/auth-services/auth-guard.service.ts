import { Injectable } from '@angular/core';
import { ActivatedRoute, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private actRoute: ActivatedRoute) { }

  canActivate(): boolean {
    if (this.authService.getLoggValue()) {
      return true
    } else {
      this.router.navigate(['auth'], {relativeTo: this.actRoute})
      return false
    }
  }

}
