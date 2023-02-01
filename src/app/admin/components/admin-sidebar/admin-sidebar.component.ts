import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  isMenu: boolean = false

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
  }
}
