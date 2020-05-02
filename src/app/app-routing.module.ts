import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';


const routes: Routes = [
  {path: 'Pizza', component: HomeComponent},

  {path: '', pathMatch: 'full', redirectTo: 'Pizza'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
