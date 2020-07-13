import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeProject } from '../../core/classes/typeProject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeprojectService {



  private URL_GET_TYPEOFPROJECTS = 'http://localhost:8080/project-types';
  private URL_POST_TYPEOFPROJECTS = 'http://localhost:8080/project-types';
  private URL_UPDATE_TYPEOFPROJECTS = 'http://localhost:8080/project-types';
  private URL_DELETE_TYPEOFPOJECTS = 'http://localhost:8080/project-types';

  constructor(private http: HttpClient) { }

  getTypeOfProject(): Observable<TypeProject[]> {
    return this.http.get<TypeProject[]>(this.URL_GET_TYPEOFPROJECTS);
  }

  postProjectType(projectType: TypeProject): Observable<TypeProject>{

    return this.http.post<TypeProject>(this.URL_POST_TYPEOFPROJECTS,projectType);

  }
  putProjectType(projectType: TypeProject): Observable<TypeProject> {
    return this.http.put<TypeProject>(this.URL_UPDATE_TYPEOFPROJECTS + `/${projectType.id}`, projectType);
  }

  deleteProjectType(id: number) {
    return this.http.delete(this.URL_DELETE_TYPEOFPOJECTS + "/" + id);
  }

}
