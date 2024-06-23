import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private _MoviesService: MoviesService) {}

  imgComplete: string = 'https://image.tmdb.org/t/p/w500';
  trendingMovies: any[] = [];
  trendingTv: any[] = [];
  trendingPeople: any[] = [];
  detailsPerson: any[] = [];
  id: string = '';
  loading: boolean = false;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 8,
      },
    },
    nav: true,
  };

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe((response) => {
      this.trendingMovies = response.results.slice(0, 10);
      this.loading = true;
    });

    this._MoviesService.getTrending('tv').subscribe((response) => {
      this.trendingTv = response.results.slice(0, 10);
      this.loading = true;
    });

    this._MoviesService.getTrending('person').subscribe((response) => {
      this.trendingPeople = response.results.slice(0, 10);
      this.loading = true;
    });

    this._MoviesService.getDetailsPerson(this.id).subscribe((response) => {
      this.detailsPerson = response;
    });
  }
}
