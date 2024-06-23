import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvComponent } from './views/tv/tv.component';
import { RegisterComponent } from './views/register/register.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { MoviesComponent } from './views/movies/movies.component';
import { FooterComponent } from './views/footer/footer.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { PeopleComponent } from './views/people/people.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MoviedetailsComponent } from './views/moviedetails/moviedetails.component';
import { WatchPipe } from './pipes/watch.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    TvComponent,
    RegisterComponent,
    NotfoundComponent,
    MoviesComponent,
    FooterComponent,
    NavbarComponent,
    PeopleComponent,
    LoginComponent,
    HomeComponent,
    MoviedetailsComponent,
    WatchPipe,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
