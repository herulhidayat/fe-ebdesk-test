import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  menu: boolean = false
  isScroll: any;

  setMenu() {
    this.menu = !this.menu
  }

 @HostListener("window:scroll")
  onScrolling() {
    // console.log("aaa",window.scrollY)
    if (window.scrollY > 20) {
      this.isScroll = true
    } else {
      this.isScroll = false
    }
  }
}
