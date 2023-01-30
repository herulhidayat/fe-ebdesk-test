import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
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
