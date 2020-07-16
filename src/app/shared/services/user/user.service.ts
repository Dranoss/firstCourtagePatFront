import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/classes/user';
import { Project } from '../../core/classes/project';
import { TypeProject } from '../../core/classes/typeProject';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private local = environment.base_url;
  private URL_USER = this.local + 'users';
  private URL_TYPEPROJECTS = this.local + 'typeProjects';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_USER);
  }

  // getProjectsByUserId(id: number): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.URL_TYPEPROJECTS + '/' + id);
  // }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL_USER}/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL_USER, user);
  }

  putUserById(user: User): Observable<User> {
    return this.http.put<User>(this.URL_USER + `/${user.id}`, user);
  }

  deleteUserById(id: number) {
    return this.http.delete(this.URL_USER + '/' + id);
  }
}
