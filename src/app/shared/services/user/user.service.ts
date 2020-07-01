import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput} from 'rxjs';
import { User } from '../../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // A SUPPRIMER LORSQUE NOUS AURONS LE LIEN AVEC LE BACK
  users: User[] = [{
    role: 'client',
    userType: {id: 0, name: '', users: []},
    firstName: 'Fabien',
    lastName: 'Jouanneau',
    email: 'jouanneau.fab@gmail.com',
    phoneNumber: '0768195419',
    password: 'test',
    companyName: '',
    siretNumber: '',
    sponsorshipCode: '',
    id: 1,
    userAddress: {id: 1, streetNumber: 27, streetName: 'rue Saincric', zipCode: '33000', cityName: 'Bordeaux'},
    userRib: {id: 1, ibanNumber: '', bicCode: '', ownerName: '', bankName: ''}
  },
  ];

// A DEFINIR POUR LIER LE BACK
private USER_URL = 'http://localhost:8080/users';

constructor(private http: HttpClient) { }

// getUserById(id: number): User{


getAllUsers(): Observable<User[]>{
  return this.http.get<User[]>(this.USER_URL);
}

// A UTILISER LORSQUE L'ON AURA LE BACK
getUserById(id: number): Observable<User>{
  return this.http.get<User>(`${this.USER_URL}/${id}`);
}

  // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
  // const user = this.users.find(x => x.id === id);
  // return user;
  // }

postUser(user: User): Observable<User>{
  return this.http.post<User>(this.USER_URL, user);
}

putUserById(user: User): Observable<User>{
  return this.http.put<User>(`${this.USER_URL}/${user.id}`, user);
}

deleteUserById(id): Observable<void>{
  return this.http.delete<void>(`${this.USER_URL}/${id}`);
}
}
