import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput} from 'rxjs';
import { User } from '../../core/classes/user';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static USER_URL = environment.baseUrl + 'users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable < User[] > {
    return this.http.get<User[]>(UserService.USER_URL);
  }

  getUserById(id: number): Observable < User > {
    return this.http.get<User>(`${UserService.USER_URL}/${id}`);
  }

  postUser(user: User): Observable < User > {
    return this.http.post<User>(`${UserService.USER_URL}/sign-up`, user);
  }

  putUserById(user: User): Observable < User > {
    return this.http.put<User>(`${UserService.USER_URL}/${user.id}`, user);
  }

  deleteUserById(id): Observable < void > {
    return this.http.delete<void>(`${UserService.USER_URL}/${id}`);
  }
}
