import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-data-source-admin',
  templateUrl: './data-source-admin.component.html',
  styleUrls: ['./data-source-admin.component.css']
})
export class DataSourceAdminComponent implements OnInit  {
  isMenu: boolean = false
  isDsource = "/admin/data-source"

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
