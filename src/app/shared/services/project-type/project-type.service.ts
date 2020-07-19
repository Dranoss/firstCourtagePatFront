import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectType } from '../../core/classes/project-type';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {
  private static PROJECT_TYPE_URL = environment.baseUrl + 'project-types';
  constructor(private http: HttpClient) { }

  getAllProjectTypes(): Observable<ProjectType[]>{
    return this.http.get<ProjectType[]>(ProjectTypeService.PROJECT_TYPE_URL);
  }

  getProjectTypeById(id: number): Observable<ProjectType>{
    return this.http.get<ProjectType>(`${ProjectTypeService.PROJECT_TYPE_URL}/${id}`);
  }

  postProjectType(projectType: ProjectType): Observable<ProjectType>{
    return this.http.post<ProjectType>(ProjectTypeService.PROJECT_TYPE_URL, projectType);
  }
  putProjectTypeById(projectType: ProjectType): Observable<ProjectType>{
    return this.http.put<ProjectType>(`${ProjectTypeService.PROJECT_TYPE_URL}/${projectType.id}`, projectType);
  }
  deleteProjectTypeById(id: number): Observable<void> {
    return this.http.delete<void>(`${ProjectTypeService.PROJECT_TYPE_URL}/${id}`);
  }
}
