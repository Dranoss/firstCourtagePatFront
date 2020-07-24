import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from '../../core/classes/user_type';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private static USERTYPE_URL = environment.baseUrl + 'user-types';
  constructor(private http: HttpClient) { }

  getAllUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(UserTypeService.USERTYPE_URL);
  }

  getUserTypeById(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${UserTypeService.USERTYPE_URL}/${id}`);
  }

  createUserType(userType: UserType): Observable<UserType> {
    return this.http.post<UserType>(`${UserTypeService.USERTYPE_URL}`, userType);
  }

  updateUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(`${UserTypeService.USERTYPE_URL}/${userType.id}`, userType);
  }

  deleteUserType(id: number): Observable<void>{
    return this.http.delete<void>(`${UserTypeService.USERTYPE_URL}/${id}`);
  }
}
