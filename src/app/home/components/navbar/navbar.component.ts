import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  menu: boolean = false
  isScroll: any;
  home: boolean = true
  product: boolean = false
  blog: boolean = false
  pricing: boolean = false
  contact: boolean = false

  setMenu() {
    this.menu = !this.menu
  }

 @HostListener("window:scroll")
  onScrolling() {
    if (window.scrollY > 20) {
      this.isScroll = true
    } else {
      this.isScroll = false
    }

    if (window.scrollY >= 0 && window.scrollY < 680){
      this.home = true
    } else {
      this.home = false
    }

    if (window.scrollY >= 680 && window.scrollY < 1388){
      this.product = true
    } else {
      this.product = false
    }

    if (window.scrollY >= 1388 && window.scrollY < 4852){
      this.blog = true
    } else {
      this.blog = false
    }

    if (window.scrollY >= 4852 && window.scrollY < 5940){
      this.pricing = true
    } else {
      this.pricing = false
    }

    if (window.scrollY >= 5940){
      this.contact = true
    } else {
      this.contact = false
    }

  }

}
