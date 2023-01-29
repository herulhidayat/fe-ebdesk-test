import { Component } from '@angular/core';
import { NavScrollService } from './home/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fe-ebdesk-test';

  constructor(public navScroll: NavScrollService) {}

  onScrolling() {
    if (window.scrollY > 89) {
      this.navScroll.setScroll(!this.navScroll.isScroll.value)
    } else {
      this.navScroll.setScroll(this.navScroll.isScroll.value)
    }
    console.log("aaa",window.scrollY)
  }
}
