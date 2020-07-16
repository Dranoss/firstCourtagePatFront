import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../../core/classes/userType';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TypeOfUserService {


  private URL_TYPEOFUSERS = environment.base_url + 'user-types';

  constructor(private http: HttpClient) { }

  getTypeOfUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.URL_TYPEOFUSERS);
  }

  postUserType(userType: UserType):Observable<UserType>{

    return this.http.post<UserType>(this.URL_TYPEOFUSERS,userType);

  }
  putUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(this.URL_TYPEOFUSERS + `/${userType.id}`, userType);
  }

}
