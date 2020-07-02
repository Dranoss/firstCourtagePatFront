import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TypeUser } from '../core/classes/typeUser';

@Injectable({
  providedIn: 'root'
})
export class TypeOfUserService {


  private URL_GET_TYPEOFUSERS = 'http://localhost:8080/type/user-types';

  constructor(private http: HttpClient) { }

  getTypeOfUsers(): Observable<TypeUser[]> {
    return this.http.get<TypeUser[]>(this.URL_GET_TYPEOFUSERS);
  }

}
