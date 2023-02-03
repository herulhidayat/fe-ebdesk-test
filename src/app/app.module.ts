import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { HeroComponent } from './home/components/hero/hero.component';
import { ContentComponent } from './home/components/content/content.component';
import { FooterComponent } from './home/components/footer/footer.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminNavComponent } from './admin/components/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './admin/components/admin-sidebar/admin-sidebar.component';
import { DashboardAdminComponent } from './admin/pages/dashboard-admin/dashboard-admin.component';
import { DataSourceAdminComponent } from './admin/pages/data-source-admin/data-source-admin.component';
import { MenuService } from './admin/services/menu.service';
import { DataTableComponent } from './admin/components/data-table/data-table.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './admin/services/auth.service';
import { AuthGuard } from './admin/services/auth.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContentComponent,
    FooterComponent,
    ErrorPageComponent,
    LoginPageComponent,
    HomeComponent,
    AboutComponent,
    AdminNavComponent,
    AdminSidebarComponent,
    DashboardAdminComponent,
    DataSourceAdminComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MenuService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
