import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-data-source-admin',
  templateUrl: './data-source-admin.component.html',
  styleUrls: ['./data-source-admin.component.css']
})
export class DataSourceAdminComponent {
  isMenu: boolean = false

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
  }
}
