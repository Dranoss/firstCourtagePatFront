import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../core/classes/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private static LOGIN_URL = 'http://localhost:8080/login';
  private static GET_ME_URL = 'http://localhost:8080/users/me';
  token;
  user: User;

  constructor(
    private http: HttpClient,
    ) { }

  login(user: {email: string, password: string}){
    return this.http.post(AuthService.LOGIN_URL, user, {observe: 'response'}).subscribe((resp) => {
      localStorage.setItem('token', resp.headers.get('Authorization'));
      this.token = localStorage.getItem('token');
      this.http.get(AuthService.GET_ME_URL).subscribe(data => {
        this.user = data;
        localStorage.setItem('userRole', this.user.role);
        localStorage.setItem('userId', this.user.id.toString());
      });
    });
  }


  removeToken(){
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userId');
  }
}
