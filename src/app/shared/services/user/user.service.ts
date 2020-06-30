import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  GETUSERS_URL = 'http://localhost:8080/users';
  GETUSERBYID_URL = 'http://localhost:8080/users';

  USER_URL = 'http://localhost:8080/users';

  constructor(private httpCli: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpCli.get<User[]>(this.GETUSERS_URL);
  }

  getUserById(id: number): Observable<User> {

    return this.httpCli.get<User>(this.GETUSERS_URL + '/' + id);

  }



  postUser(user: User): Observable<User> {
    return this.httpCli.post<User>(this.GETUSERS_URL, user);
  }

  putUserById(user: User): Observable<User> {
    return this.httpCli.put<User>(this.GETUSERS_URL + `/${user.id}`, user);
  }

  deleteUserById(user) {
    return this.httpCli.delete<User>(this.GETUSERS_URL + `/${user.id}`, user);
  }
}
