import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/classes/user';
import { Project } from '../../core/classes/project';
import { TypeProject } from '../../core/classes/typeProject';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL_GET_USER_BY_ID = 'http://www.courtagepatrimoine.net/users/';
  private URL_GET_USERS = 'http://localhost:8080/users';

  private URL_GET_PROJECTS = 'http://localhost:8080/projects';
  private URL_PUT_PROJECT = 'http://localhost:8080/projects/projectby';
  private URL_POST_PROJECT = 'http://localhost:8080/projects';

  private URL_DELETE_USER = 'http://localhost:8080/deluser';


  private URL_GET_TYPEPROJECTS = 'http://localhost:8080/typeProjects';

  //private URL_GET_PROJECTSBYUSER = 'http://localhost:8080/projects/users';

  private URL_POST_USER = 'http://www.courtagepatrimoine.net/users/user';
  private URL_UPDATE_USER = 'http://www.courtagepatrimoine.net/users/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL_GET_USERS);
  }



  // getProjectsByUserId(id: number): Observable<Project[]> {
  //   return this.http.get<Project[]>(this.URL_GET_PROJECTSBYUSER + '/' + id);
  // }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL_GET_USER_BY_ID}/${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(this.URL_POST_USER, user);
  }

  putUserById(user: User): Observable<User> {
    return this.http.put<User>(this.URL_UPDATE_USER + `/${user.id}`, user);
  }

  deleteUserById(id: number) {
    return this.http.delete(this.URL_DELETE_USER + "/" + id);
  }
}
