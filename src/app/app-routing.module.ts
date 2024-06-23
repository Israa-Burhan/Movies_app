import { MoviedetailsComponent } from './views/moviedetails/moviedetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PeopleComponent } from './views/people/people.component';
import { MoviesComponent } from './views/movies/movies.component';
import { TvComponent } from './views/tv/tv.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'people', canActivate: [authGuard], component: PeopleComponent },
  { path: 'movies', canActivate: [authGuard], component: MoviesComponent },
  { path: 'tv', canActivate: [authGuard], component: TvComponent },
  {
    path: 'setting',
    loadChildren: () =>
      import('./views/settings/settings.module').then((x) => x.SettingsModule),
  },
  {
    path: 'moviedetails/:id',
    canActivate: [authGuard],
    component: MoviedetailsComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
