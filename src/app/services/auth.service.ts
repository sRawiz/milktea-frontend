import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;
  private currentUser: User | null = null;
  private users: User[] = [
    { username: 'staff@bmail.com', password: 'password123' },
    { username: 'admin', password: '1234' },
    { username: 'user', password: 'user' },
    { username: 'test', password: 'test' }
  ];

  login(user: User): boolean {
    const foundUser = this.users.find(u => u.username === user.username && u.password === user.password);
    if (foundUser) {
      this.loggedIn = true;
      this.currentUser = foundUser;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logout(): void {
    this.loggedIn = false;
    this.currentUser = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

  constructor() { }
}
