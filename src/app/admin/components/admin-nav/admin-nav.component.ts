import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  isMenu: boolean = false

  constructor(public menuService: MenuService) {}
  setMenu(){
    this.menuService.setMenu(!this.menuService.isMenu.value)
  }

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
  }
}
