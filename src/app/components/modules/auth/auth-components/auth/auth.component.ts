import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../auth-services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  login!: FormGroup;
  registration!: FormGroup;

  logInNote: string = '';
  regNote: string = '';

  constructor(private authService: AuthService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.authService.getLoggValue()) {
      this.router.navigate(['profile'], {relativeTo: this.actRoute})
    } else {
      this.login = new FormGroup({
        login: new FormControl('', [Validators.minLength(5), Validators.required]),
        password: new FormControl('', [Validators.minLength(8), Validators.required])
      })
      this.registration = new FormGroup({
        login: new FormControl('', [Validators.minLength(5), Validators.required]),
        password: new FormControl('', [Validators.minLength(8), Validators.required])
      })
    }
  }

  toLogIn(form: FormGroup) {
    this.authService.logIn(form.controls['login'].value, form.controls['password'].value, this.actRoute)
    this.logInNote = this.authService.getlogInNote()
    form.controls['password'].reset()
  }

  toRegister(form: FormGroup) {
    this.authService.register(form.controls['login'].value, form.controls['password'].value)
    form.controls['password'].reset()
    this.regNote = this.authService.getRegNote()
  }

}
