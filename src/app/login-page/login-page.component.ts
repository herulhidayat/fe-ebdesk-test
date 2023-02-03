import { Component } from '@angular/core';
import { AuthService } from '../admin/services/auth.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username = '';
  password = '';

  constructor(public authService: AuthService, private router: Router) {}

  login() {
    from(this.authService.login(this.username, this.password))
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/admin']);
    }
    );
  }
}
