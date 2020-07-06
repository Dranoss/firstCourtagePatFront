import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectType } from '../../core/classes/project-type';

@Injectable({
  providedIn: 'root'
})
export class ProjectTypeService {
  private PROJECT_TYPE_URL = 'http://localhost:8080/project-types';
  constructor(private http: HttpClient) { }

  getAllUserTypes(): Observable<ProjectType[]>{
    return this.http.get<ProjectType[]>(this.PROJECT_TYPE_URL);
  }

  getUserTypeById(id: number): Observable<ProjectType>{
    return this.http.get<ProjectType>(`${this.PROJECT_TYPE_URL}/${id}`);
  }

  postUserType(projectType: ProjectType): Observable<ProjectType>{
    return this.http.post<ProjectType>(this.PROJECT_TYPE_URL, projectType);
  }
  putUserTypeById(projectType: ProjectType): Observable<ProjectType>{
    return this.http.put<ProjectType>(`${this.PROJECT_TYPE_URL}/${projectType.id}`, projectType);
  }
  deleteUserTypeById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.PROJECT_TYPE_URL}/${id}`);
  }
}
