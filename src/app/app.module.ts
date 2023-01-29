import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';
import { NavScrollService } from './home/services/scroll.service';
import { HeroComponent } from './home/components/hero/hero.component';
import { ContentComponent } from './home/components/content/content.component';
import { FooterComponent } from './home/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NavScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
