import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth-components/auth/auth.component';
import { ProfileComponent } from './auth-components/profile/profile.component';
import { AuthGuard } from './auth-services/auth-guard.service';

const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'profile', canActivate: [AuthGuard], component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
