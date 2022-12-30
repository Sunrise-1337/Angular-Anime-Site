import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth-components/auth/auth.component';
import { ProfileComponent } from './auth-components/profile/profile.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth-services/auth.service';



@NgModule({
  declarations: [
    AuthComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
})
export class AuthModule { }
