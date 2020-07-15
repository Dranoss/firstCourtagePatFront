import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projectstatus } from '../../core/classes/projectstatus.';
import { Observable } from 'rxjs';
import { TypeProject } from '../../core/classes/typeProject';

@Injectable({
  providedIn: 'root'
})
export class StatusService {


  private URL_GET_StatusList = 'http://localhost:8080/project-status';
  private URL_GET_StatusListByTypeProject = 'http://localhost:8080/project-status/typeProject';


  constructor(private http: HttpClient) { }

  getListofStatus2(): Observable<Projectstatus[]> {
    return this.http.get<Projectstatus[]>(this.URL_GET_StatusList);
  }

  getListofStatusByTypeProjectId(id: number): Observable<Projectstatus[]> {
    return this.http.get<Projectstatus[]>(this.URL_GET_StatusListByTypeProject+"/"+id);
  }
  getStatusById(id: number) {
    return this.http.get<Projectstatus>(this.URL_GET_StatusList+"/"+id);
  }


}
