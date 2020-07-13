import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserType } from '../../core/classes/user_type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  USERTYPE_URL = 'http://localhost:8080/user-types';
  constructor(private http: HttpClient) { }

  getAllUserTypes(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.USERTYPE_URL);
  }

  getUserTypeById(id: number): Observable<UserType> {
    return this.http.get<UserType>(`${this.USERTYPE_URL}/${id}`);
  }

  createUserType(userType: UserType): Observable<UserType> {
    return this.http.post<UserType>(`${this.USERTYPE_URL}`, userType);
  }

  updateUserType(userType: UserType): Observable<UserType> {
    return this.http.put<UserType>(`${this.USERTYPE_URL}/${userType.id}`, userType);
  }

  deleteUserType(id: number): Observable<void>{
    return this.http.delete<void>(`${this.USERTYPE_URL}/${id}`);
  }
}
