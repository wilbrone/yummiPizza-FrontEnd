import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { OrderComponent } from '../app/components/order/order.component';


const routes: Routes = [
  {path: 'pizza', component: HomeComponent},
  {path: 'cart', component: OrderComponent},

  {path: '', pathMatch: 'full', redirectTo: 'pizza'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
