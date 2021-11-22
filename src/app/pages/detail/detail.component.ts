import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from 'src/app/models/entity/movie';
import { MovieFilter } from 'src/app/models/filter/music/movie.filter';

import { MovieService } from 'src/app/services/movie.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  movie: Movie | null = null;
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private userService: UserService,
  ) {

  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id') ? this.route.snapshot.paramMap.get('id') : '';
    let filter = new MovieFilter();
    filter.rank = id?parseInt(id):0;
    this.getMovieByFilter(filter);
  }


  
  isLogged(){
    return this.userService.isAuthorized();
  }
  



  getMovieByFilter(filter: MovieFilter) {

    this.movieService
      .getMovie(filter)
      .subscribe(
        (res) => {
          this.movie = res.data;
          console.log("  this.movie",  this.movie)
         
        },
        (error) => {
        }
      );
  }

  
}
