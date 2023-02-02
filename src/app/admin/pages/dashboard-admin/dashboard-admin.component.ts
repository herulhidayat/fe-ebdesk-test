import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent {
  isMenu: boolean = false
  isDash = "/admin"

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
  }
}
