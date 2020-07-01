import { Injectable } from '@angular/core';
import { UserRib } from '../../core/classes/user-rib';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RibService {

  private RIB_URL = 'http://localhost:8080/user-ribs';
  constructor(private http: HttpClient) { }

  getAllRibs(): Observable<UserRib[]>{
    return this.http.get<UserRib[]>(this.RIB_URL);
  }

  getRibById(id: number): Observable<UserRib>{
    return this.http.get<UserRib>(`${this.RIB_URL}/${id}`);
  }

  postRib(userRib: UserRib): Observable<UserRib>{
    return this.http.post<UserRib>(this.RIB_URL, userRib);
  }
  putRibById(userRib: UserRib): Observable<UserRib>{
    return this.http.put<UserRib>(`${this.RIB_URL}/${userRib.id}`, userRib);
  }
  deleteRibeById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.RIB_URL}/${id}`);
  }
}
