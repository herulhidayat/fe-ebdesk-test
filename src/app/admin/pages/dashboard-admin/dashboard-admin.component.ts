import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  isMenu: boolean = false
  isDash = "/admin"

  constructor(public menuService: MenuService, private authService: AuthService) {}

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
    const token = localStorage.getItem('token');
    if (!token) {
      this.authService.logout();
    }
  }
}
