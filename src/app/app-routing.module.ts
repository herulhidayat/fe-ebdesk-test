import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full', 
      component: ErrorPageComponent },
  // {path: '404', component: ErrorPageComponent},
  // {path: '**', redirectTo: '/404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
