import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../../core/classes/userType';

@Injectable({
  providedIn: 'root'
})
export class TypeOfUserService {


  private URL_GET_TYPEOFUSERS = 'http://localhost:8080/user-types';

  constructor(private http: HttpClient) { }

  getTypeOfUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.URL_GET_TYPEOFUSERS);
  }

}
