import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectStatus } from '../../core/classes/project-status';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {

  private static PROJECT_STATUS_URL = environment.baseUrl + 'project-status';
  constructor(private http: HttpClient) { }

  getAllProjectStatuses(): Observable<ProjectStatus[]>{
    return this.http.get<ProjectStatus[]>(ProjectStatusService.PROJECT_STATUS_URL);
  }

  getProjectStatusById(id: number): Observable<ProjectStatus>{
    return this.http.get<ProjectStatus>(`${ProjectStatusService.PROJECT_STATUS_URL}/${id}`);
  }

  postProjectStatus(projectStatus: ProjectStatus): Observable<ProjectStatus>{
    return this.http.post<ProjectStatus>(ProjectStatusService.PROJECT_STATUS_URL, projectStatus);
  }
  putProjectStatusById(projectStatus: ProjectStatus): Observable<ProjectStatus>{
    return this.http.put<ProjectStatus>(`${ProjectStatusService.PROJECT_STATUS_URL}/${projectStatus.id}`, projectStatus);
  }
  deleteProjectStatusById(id: number): Observable<void> {
    return this.http.delete<void>(`${ProjectStatusService.PROJECT_STATUS_URL}/${id}`);
  }
}
