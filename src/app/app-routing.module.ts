import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimeRecComponent } from './components/pages/anime-rec/anime-rec.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchComponent } from './components/pages/search/search.component';
import { SingleAnimeComponent } from './components/pages/single-anime/single-anime.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "anime", component: AnimeRecComponent},
  { path: "anime/:id", component: SingleAnimeComponent },
  { path: "search", component: SearchComponent },
  { path: "auth", loadChildren: () => import('./components/modules/auth/auth.module').then(arg => arg.AuthModule)},
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
