import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '**', redirectTo: '/'},
   // user will always be redirected to the entry point of the app (instead of redirecting to 404 page)
  //  in this case, it is HomeComponent
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
