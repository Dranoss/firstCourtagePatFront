import { Injectable } from '@angular/core';
import { Project } from '../core/classes/project';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projects: Project[];

  GETPROJECTSBYUSER_URL = 'http://localhost:8080/projects';
  GETUSERS_URL = '';
  constructor(private httpCli: HttpClient) { }

  getProjects(idUser: number): Observable<Project[]> {
    return this.httpCli.get<Project[]>(this.GETPROJECTSBYUSER_URL+"/"+idUser);
  }




  postUser(user: User): Observable<User> {
    return this.httpCli.post<User>(this.GETUSERS_URL, user);
  }

  putUserById(user: User): Observable<User> {
    return this.httpCli.put<User>(this.GETUSERS_URL + `/${user.id}`, user);
  }

  deleteUserById(user) {
    return this.httpCli.delete<User>(this.GETUSERS_URL + `/${user.id}`, user);
  }
}
