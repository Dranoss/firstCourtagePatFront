import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { User } from '../../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // A SUPPRIMER LORSQUE NOUS AURONS LE LIEN AVEC LE BACK
  users: User[] = [{
    role: 'client',
    type: '',
    firstname: 'Fabien',
    lastname: 'Jouanneau',
    email: 'jouanneau.fab@gmail.com',
    phoneNumber: '0768195419',
    password: 'test',
    societyName: '',
    siretNumber: '',
    sponsorshipCode: '',
    id: 1,
    address: {id: 1, addressNumber: 27, street: 'rue Saincric', zipCode: '33000', city: 'Bordeaux'},
    rib: {id: 1, iban: '', bic: '', ownerFullname: '', bankName: ''}
  },
  ];

// A DEFINIR POUR LIER LE BACK
private USER_URL = '';

constructor(private http: HttpClient) { }

getUserById(id: number): User{
// A UTILISER LORSQUE L'ON AURA LE BACK
// getUserById(id: number): Observable<User[]>{
//   this.http.get<User>(`${this.USER_URL}/${id}`);
// }

  // A SUPPRIMER LORSQUE L'ON AURA LA LIAISON BACK
  const user = this.users.find(x => x.id === id);
  return user;
}

postUser(user: User): Observable<User>{
  return this.http.post<User>(this.USER_URL, user);
}

putUserById(user: User): Observable<User>{
  return this.http.put<User>(this.USER_URL + `/${user.id}`, user);
}

deleteUserById(user){
  return this.http.delete<User>(this.USER_URL + `/${user.id}`, user);
}
}
