import { Component, HostListener, OnInit } from '@angular/core';
import { NavScrollService } from '../../services/scroll.service';

@HostListener('window:scroll', ['$event'])

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isScroll: any;
  constructor(public navScroll: NavScrollService){}

  ngOnInit(): void {
    this.navScroll.isScroll.subscribe((isScroll) => {
      this.isScroll = isScroll
    })
    console.log(this.isScroll)
  }

}
