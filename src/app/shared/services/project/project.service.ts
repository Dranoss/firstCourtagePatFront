import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../core/classes/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private static PROJECT__URL = 'http://localhost:8080/projects';
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(ProjectService.PROJECT__URL);
  }

  getProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(`${ProjectService.PROJECT__URL}/${id}`);
  }

  postProject(project): Observable<any>{
    return this.http.post<any>(ProjectService.PROJECT__URL, project);
  }
  putProjectById(project): Observable<any>{
    return this.http.put<any>(`${ProjectService.PROJECT__URL}/${project.id}`, project);
  }
  deleteProjectById(id: number): Observable<void> {
    return this.http.delete<void>(`${ProjectService.PROJECT__URL}/${id}`);
  }
}
