import { Injectable } from '@angular/core';
import { UserRib } from '../../core/classes/user-rib';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RibService {

  private static RIB_URL = 'http://localhost:8080/user-ribs';
  constructor(private http: HttpClient) { }

  getAllRibs(): Observable<UserRib[]>{
    return this.http.get<UserRib[]>(RibService.RIB_URL);
  }

  getRibById(id: number): Observable<UserRib>{
    return this.http.get<UserRib>(`${RibService.RIB_URL}/${id}`);
  }

  postRib(userRib: UserRib): Observable<UserRib>{
    return this.http.post<UserRib>(RibService.RIB_URL, userRib);
  }
  putRibById(userRib: UserRib): Observable<UserRib>{
    return this.http.put<UserRib>(`${RibService.RIB_URL}/${userRib.id}`, userRib);
  }
  deleteRibeById(id: number): Observable<void> {
    return this.http.delete<void>(`${RibService.RIB_URL}/${id}`);
  }
}
