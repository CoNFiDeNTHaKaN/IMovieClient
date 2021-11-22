import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../helpers/auth.guard';

import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';

const routes: Routes = [
  {
    path: "home",
    redirectTo:""
  },
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "detail/:id",
    component:DetailComponent
  },
  {
    path: "search/:id",
    component:MovieListComponent
  },
  {
    path: "search",
    component:MovieListComponent
  },


 

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
