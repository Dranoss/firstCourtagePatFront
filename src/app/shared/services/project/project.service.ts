import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/classes/user';
import { Project } from '../../core/classes/project';
import { TypeProject } from '../../core/classes/typeProject';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //Projects
  private static URL_GET_PROJECTS = 'http://localhost:8080/projects';
  private static URL_GET_PROJECTSBYUSERID = 'http://localhost:8080/project';
  private static URL_PUT_PROJECT = 'http://localhost:8080/projects';

  private static URL_GET_TYPEPROJECTS = 'http://localhost:8080/typeProjects';
  private static URL_POST_PROJECT = 'http://localhost:8080/projects/project';



  constructor(private http: HttpClient) {



  }

  // Projects
  getProjectsByUserId(id: number): Observable<Project[]>{
    return this.http.get<Project[]>(ProjectService.URL_GET_PROJECTSBYUSERID + '/' +id);
 }



 getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(ProjectService.URL_GET_PROJECTS);
  }

  getTypeProjects(): Observable<TypeProject[]> {
    return this.http.get<TypeProject[]>(ProjectService.URL_GET_TYPEPROJECTS);
  }

  putProject(project: Project): Observable<Project> {
    return this.http.put<Project>(ProjectService.URL_PUT_PROJECT, project);
  }
  addProject(user: User , project: Project): Observable<Project> {
    return this.http.post<Project>(ProjectService.URL_POST_PROJECT, { user, project });
  }

}
