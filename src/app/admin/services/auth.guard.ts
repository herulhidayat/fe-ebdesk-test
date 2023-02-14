import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isTokenValid()) {
      return true;
    } else {
      alert('Login gagal');
      this.router.navigate(['/login']);
      return false;
    }
  }

  isTokenValid(): boolean | undefined {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    try {
      const tokenData = JSON.parse(atob(token.split('.')[1]));
      const expiryDate = new Date(tokenData.exp * 1000);
      if (new Date() > expiryDate) {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }

    return true;
  }
}