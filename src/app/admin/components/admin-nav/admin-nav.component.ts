import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent {
  isMenu: boolean = false
  isDropdown: boolean = false

  constructor(public menuService: MenuService, private authService: AuthService) {}
  setMenu(){
    this.menuService.setMenu(!this.menuService.isMenu.value)
  }

  ngOnInit(): void {
    this.menuService.isMenu.subscribe((isMenu) => {
      this.isMenu = isMenu
    })
  }

  dropdown() {
    this.isDropdown = !this.isDropdown
  }

  logout(){
    this.authService.logout();
  }
}
