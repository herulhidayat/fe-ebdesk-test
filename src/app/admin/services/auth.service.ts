import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) {}
  
  login(username: string, password: string) {
    return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(res => res.json())
    .then(data => {
      this.isLoggedIn = true;
      return data;
    });
  }

  isTokenValid() {
    // Ambil token dari local storage
    const token = localStorage.getItem('token');
    // Pengecekan token pada API
    return fetch('https://dummyjson.com/auth/checkToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token
      })
    })
    .then(res => res.json())
    .then(data => {
      // Jika token valid, return true
      if (data.valid) {
        this.isLoggedIn = true;
        return true;
      } else {
        // Jika token tidak valid, return false
        this.isLoggedIn = false;
        return false;
      }
    });
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}