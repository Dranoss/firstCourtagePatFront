import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAddress } from '../../core/classes/user-address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private ADDRESS_URL = 'http://localhost:8080/user-addresses';
  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<UserAddress[]>{
    return this.http.get<UserAddress[]>(this.ADDRESS_URL);
  }

  getAddressById(id: number): Observable<UserAddress>{
    return this.http.get<UserAddress>(`${this.ADDRESS_URL}/${id}`);
  }

  postAddress(userAddress: UserAddress): Observable<UserAddress>{
    return this.http.post<UserAddress>(this.ADDRESS_URL, userAddress);
  }
  putAddressById(userAddress: UserAddress): Observable<UserAddress>{
    return this.http.put<UserAddress>(`${this.ADDRESS_URL}/${userAddress.id}`, userAddress);
  }
  deleteAddresseById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.ADDRESS_URL}/${id}`);
  }
}
