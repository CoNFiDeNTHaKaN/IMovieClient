import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Movie } from '../models/entity/movie';
import { MovieListFilter } from '../models/filter/music/movie-list-filter';
import { MovieFilter } from '../models/filter/music/movie.filter';

import { PaginatedResponse } from '../models/response/paginated-reponse';
import { ResponseData } from '../models/response/response-data';
import { BaseService } from './base.service';
import { EndPoints } from './end-points';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

 

  constructor(private http: HttpClient, private baseService: BaseService) {}


  create(music: Movie) :Observable<ResponseData<Movie>> {
   
    return this.baseService.post<Movie>(
      music,
      environment.serverBaseUrl,
      EndPoints.MOVIE+'/Create'
    );
  }

  update(Music: any):Observable<ResponseData<Movie>> {
    return this.baseService.update<Movie>(
      Music,
      environment.serverBaseUrl,
      EndPoints.MOVIE + "/Update"
    );
  }


  delete(id: any): Observable<ResponseData<any>> {
   
    return this.baseService.get(
      id,
      environment.serverBaseUrl,
      EndPoints.MOVIE + "/Delete"
    );
  }

  getMovie(filter:MovieFilter): Observable<ResponseData<Movie>>  {

    return this.baseService.post<Movie>(
      filter,
      environment.serverBaseUrl,
      EndPoints.MOVIE+'/GetByFilterAsync'
    );
  }


  getAllMovie(filter:MovieListFilter): Observable<PaginatedResponse<Movie>> {
    return this.baseService.listpost<Movie>(
      filter,
      environment.serverBaseUrl,
      EndPoints.MOVIE+'/GetListByFilterAsync'
    );
  }

}
