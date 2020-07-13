import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../core/classes/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private PROJECT__URL = 'http://localhost:8080/projects';
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(this.PROJECT__URL);
  }

  getProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(`${this.PROJECT__URL}/${id}`);
  }

  postProject(project): Observable<any>{
    return this.http.post<any>(this.PROJECT__URL, project);
  }
  putProjectById(project): Observable<any>{
    return this.http.put<any>(`${this.PROJECT__URL}/${project.id}`, project);
  }
  deleteProjectById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PROJECT__URL}/${id}`);
  }
}
