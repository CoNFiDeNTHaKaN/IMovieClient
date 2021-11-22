import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ErrorPageComponent } from '../components/player/error-page/error-page/error-page.component';
import { HelpersModule } from '../helpers/helpers.module';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [
    HomeComponent,
    DetailComponent,
    ErrorPageComponent,
    MovieItemComponent,
    MovieListComponent,
   
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HelpersModule,
    FormsModule,
    NgxPaginationModule,
    NgxStarRatingModule
  ],
  exports:[
    ErrorPageComponent
  ]
})
export class PagesModule { }
