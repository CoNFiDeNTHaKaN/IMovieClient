import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounce } from 'lodash';
import { Movie } from 'src/app/models/entity/movie';
import { MovieListFilter } from 'src/app/models/filter/music/movie-list-filter';
import { NotifHubService } from 'src/app/services/hub-services/notif.service';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList: Array<Movie> = [];
  filter = new MovieListFilter();

  constructor(
    private movieService: MovieService,
    private userService: UserService,
    private router: Router,
    private notifHub: NotifHubService,
    private _ngZone: NgZone
  ) {
    this.getNotifSubjectEvents();
    this.updateFilter = debounce(this.updateFilter, 1000)
  }

  ngOnInit(): void {

    this.getMovieList();
  }

  private getNotifSubjectEvents(): void {
    this.notifHub.notifReceived.subscribe((notif: string) => {
      this._ngZone.run(() => {



      });
    });
  }

  updateFilterFocus(event: any) {
    const val = event.target.value.toLowerCase();
    this.filter.pageNumber = 1;
    this.filter.pageSize = 10;
    this.filter.searchParams = val;

    this.getAllMovieByFilter(this.filter);


  }

  updateFilter(event: any) {

    const val = event.target.value.toLowerCase();

    let filter = new MovieListFilter();
    filter.pageNumber = 1;
    filter.pageSize = 10;
    filter.searchParams = val;

    this.getAllMovieByFilter(filter);
  }



  isLogged() {
    return this.userService.isAuthorized();
  }



  loadMore() {
    if (this.filter.searchParams)
      this.router.navigate(['/search', this.filter.searchParams])
    else
      this.router.navigate(['/search'])

  }

  getMovieList() {
    let filter = new MovieListFilter();
    filter.pageNumber = 1;
    filter.pageSize = 10;
    this.getAllMovieByFilter(filter);
  }

  getAllMovieByFilter(filter: MovieListFilter) {

    this.movieService
      .getAllMovie(filter)
      .subscribe(
        (res: any) => {
          this.movieList = res.data;
        },
        (error: any) => {
        }
      );
  }

}
