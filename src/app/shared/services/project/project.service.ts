import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../core/classes/user';
import { Project } from '../../core/classes/project';
import { TypeProject } from '../../core/classes/typeProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  deleted(id: number) {
    throw new Error("Method not implemented.");
  }
  //Projects
  private static URL_GET_PROJECTS = 'http://localhost:8080/projects';
  private static URL_GET_PROJECTSBYUSERID = 'http://localhost:8080/projects';
  private static URL_PUT_PROJECT = 'http://localhost:8080/projects';

  private static URL_GET_TYPEPROJECTS = 'http://localhost:8080/typeProjects';
  private static URL_POST_PROJECT = 'http://localhost:8080/projects';
  private static URL_DELETE_PROJECTS = 'http://localhost:8080/projects'

  constructor(private http: HttpClient) {

  }

  // Projects

  putProject(project: Project): Observable<Project> {
    return this.http.put<Project>(ProjectService.URL_PUT_PROJECT, project);
  }
  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(ProjectService.URL_POST_PROJECT, project);

  }
  getProjectById(id: number): Observable<Project> {
    return this.http.get<Project>(ProjectService.URL_GET_PROJECTS + "/" + id);
  }

  delete(id: number){
    return this.http.delete(ProjectService.URL_DELETE_PROJECTS + "/" + id);
  }

}
