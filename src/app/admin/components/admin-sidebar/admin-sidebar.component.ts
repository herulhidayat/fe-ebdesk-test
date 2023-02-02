import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  isMenu: boolean = false
  active: any
  @Input() isDash: string = ''
  @Input() isDsource: string = ''
  isActive: boolean = false

  constructor(public menuService: MenuService, public router: Router) {}

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
    this.active = this.router.url
  }
}
