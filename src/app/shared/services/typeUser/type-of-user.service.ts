import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../../core/classes/userType';

@Injectable({
  providedIn: 'root'
})
export class TypeOfUserService {


  private URL_GET_TYPEOFUSERS = 'http://localhost:8080/user-types';
  private URL_GET_TYPEOFUSERSBYID = 'http://localhost:8080/user-types';
  private URL_POST_TYPEOFUSERS = 'http://localhost:8080/user-types';
  private URL_UPDATE_TYPEOFUSERS = 'http://localhost:8080/user-types';
  private URL_DELETE_TYPEOFUSERS = 'http://localhost:8080/user-types';

  constructor(private http: HttpClient) { }

  getTypeOfUsers(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.URL_GET_TYPEOFUSERS);
  }


  getTypeOfUsersById(id: number): Observable<UserType> {
    return this.http.get<UserType>(this.URL_GET_TYPEOFUSERSBYID + "/"+id);
  }

  postUserType(userType: UserType):Observable<UserType>{

    return this.http.post<UserType>(this.URL_POST_TYPEOFUSERS,userType);

  }
  putUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(this.URL_UPDATE_TYPEOFUSERS + `/${userType.id}`, userType);
  }

  deleteUserType(id: number) {
    return this.http.delete(this.URL_DELETE_TYPEOFUSERS + "/" + id);
  }
}
