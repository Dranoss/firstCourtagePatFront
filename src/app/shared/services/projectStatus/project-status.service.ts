import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectStatus } from '../../core/classes/projectStatus';
import { environment } from '../../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProjectStatusService {

  private static URL_GET_PROJECTSTATUS = environment.base_url + 'project-status';


  constructor(private http: HttpClient) { }

  getProjectStatusById(id: number | ProjectStatus): Observable<ProjectStatus>{
    return this.http.get<ProjectStatus>(ProjectStatusService.URL_GET_PROJECTSTATUS + '/' + id);
  }
}
