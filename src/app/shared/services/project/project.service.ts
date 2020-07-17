import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../../core/classes/user';
import { Project } from '../../core/classes/project';
import { TypeProject } from '../../core/classes/typeProject';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static URL_GET_PROJECTS = environment.base_url + 'projects';
  private static URL_GET_TYPEPROJECTS = environment.base_url + 'typeProjects';
  private static URL_POST_PROJECT = ProjectService.URL_GET_PROJECTS + '/project';

  constructor(private http: HttpClient) {

  }

  // Projects

  getProjectsByUserId(id: number): Observable<Project[]>{
    return this.http.get<Project[]>(ProjectService.URL_GET_PROJECTS + '/' + id);
 }


  putProject(project: Project): Observable<Project> {
    return this.http.put<Project>(ProjectService.URL_PUT_PROJECT+"/"+project.id,project);
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
