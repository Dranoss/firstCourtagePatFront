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
  private URL_POST_STATUS = 'http://localhost:8080/project-status';


  constructor(private http: HttpClient) { }

  getListofStatus2(): Observable<Projectstatus[]> {
    return this.http.get<Projectstatus[]>(this.URL_GET_StatusList);
  }

  getStatusById(id: number) {
    return this.http.get<Projectstatus>(this.URL_GET_StatusList+"/"+id);
  }

  postStatus(status: Projectstatus): Observable<Projectstatus> {
    return this.http.post<Projectstatus>(this.URL_POST_STATUS,status);
  }

  deletestatus(id: number) {
    return this.http.delete(this.URL_GET_StatusList+"/"+id);
  }


}
