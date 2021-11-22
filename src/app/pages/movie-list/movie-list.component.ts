import { Component, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounce } from 'lodash';
import { Movie } from 'src/app/models/entity/movie';
import { MovieListFilter } from 'src/app/models/filter/music/movie-list-filter';
import { NotifHubService } from 'src/app/services/hub-services/notif.service';
import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList:Array<Movie>=[];
  filter = new MovieListFilter();

  p: number = 1;
  collection: any[]=[];  

  constructor(
    private movieService:MovieService,
    private userService:UserService,
    private route:ActivatedRoute,
    private notifHub:NotifHubService,
    private _ngZone: NgZone
  ) {
   
    this.getNotifSubjectEvents();
    this.updateFilter = debounce(this.updateFilter, 1000)
  }
 
  ngOnInit(): void {
    let params = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';

    let filter = new MovieListFilter();

    filter.pageNumber = 1;
    filter.pageSize = 50;
    filter.searchParams=params?params:'';

    this.getMovieList(filter);
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
    this.filter.searchParams=val;

    this.getAllMovieByFilter(this.filter);

   
  }
 
  updateFilter(event: any) {

    const val = event.target.value.toLowerCase();

    let filter = new MovieListFilter();
    filter.pageNumber = 1;
    filter.pageSize = 50;
    filter.searchParams=val;

    this.getAllMovieByFilter(filter);


  
  }



  isLogged(){
    return  this.userService.isAuthorized();
  }

  

  
  pageChange(event:any) {
    this.p=event;
    this.filter.pageNumber=event;
    this.getAllMovieByFilter(this.filter)

  }

  
  getMovieList(filter:MovieListFilter){

    this.getAllMovieByFilter(filter);
  }

  getAllMovieByFilter(filter:MovieListFilter) {

    this.movieService
      .getAllMovie(filter)
      .subscribe(
        (res:any) => {
          this.movieList = res.data;
          this.collection=this.movieList;
        },
        (error:any) => {
        }
      );
  }

}
