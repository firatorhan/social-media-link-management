import { Injectable } from '@angular/core';
import { IUserLogin } from '../../main/main.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userName = 'firatorhan';
  private password = 'rastmobile';
  constructor(private router: Router) {
    if (!!localStorage.getItem('user')) {
      console.log('isAuthenticated', this.isAuthenticated);
      this.isAuthenticated = true;
    } 
  }

  login(user: IUserLogin) {
    console.log('user', user);
    const { username, password } = user;
    setTimeout(() => {
      if (username === this.userName && password === this.password) {
        this.isAuthenticated = true;
        console.log('User logged in!');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      } else {
        this.isAuthenticated = false;
      }
    }, 2000);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
    console.log('User logged out!');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
