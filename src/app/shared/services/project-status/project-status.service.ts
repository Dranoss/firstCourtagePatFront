import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectStatus } from '../../core/classes/project-status';

@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {

  private PROJECT_STATUS_URL = 'http://localhost:8080/project-status';
  constructor(private http: HttpClient) { }

  getAllProjectStatuses(): Observable<ProjectStatus[]>{
    return this.http.get<ProjectStatus[]>(this.PROJECT_STATUS_URL);
  }

  getProjectStatusById(id: number): Observable<ProjectStatus>{
    return this.http.get<ProjectStatus>(`${this.PROJECT_STATUS_URL}/${id}`);
  }

  postProjectStatus(projectStatus: ProjectStatus): Observable<ProjectStatus>{
    return this.http.post<ProjectStatus>(this.PROJECT_STATUS_URL, projectStatus);
  }
  putProjectStatusById(projectStatus: ProjectStatus): Observable<ProjectStatus>{
    return this.http.put<ProjectStatus>(`${this.PROJECT_STATUS_URL}/${projectStatus.id}`, projectStatus);
  }
  deleteProjectStatusById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PROJECT_STATUS_URL}/${id}`);
  }
}
