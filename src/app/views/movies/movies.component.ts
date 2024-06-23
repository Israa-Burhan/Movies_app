import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  constructor(private _MoviesService: MoviesService) {}

  trendingMovies: any;
  imgComplete: string = 'https://image.tmdb.org/t/p/w500';
  loading: boolean = false;
  pages: number[] = [];
  term: string = '';

  ngOnInit(): void {
    this.pages = new Array(10).fill(0).map((x, i) => i + 1);
    this._MoviesService.getMoviesByPagination(1).subscribe((response) => {
      this.trendingMovies = response.results;
      this.loading = true;
    });
  }

  test(pageNumber: number) {
    this._MoviesService
      .getMoviesByPagination(pageNumber)
      .subscribe((response) => {
        this.trendingMovies = response.results;
      });
  }
}
