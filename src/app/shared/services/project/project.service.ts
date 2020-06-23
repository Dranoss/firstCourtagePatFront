import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Projects } from '../../core/classes/project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private static BASE_URL = 'http://localhost:8080/projects';

  constructor(private http : HttpClient) { }

  public getAll() : Observable<Projects[]> {
    return this.http.get<Projects[]>(ProjectService.BASE_URL);
  }
  public getById() : Observable<Projects[]> {
    return this.http.get<Projects []> (ProjectService.BASE_URL)
  }

}
