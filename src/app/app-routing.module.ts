import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AboutComponent } from './about/about.component';
import { DashboardAdminComponent } from './admin/pages/dashboard-admin/dashboard-admin.component';
import { DataSourceAdminComponent } from './admin/pages/data-source-admin/data-source-admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: DashboardAdminComponent},
  { path: 'admin/data-source', component: DataSourceAdminComponent},
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
