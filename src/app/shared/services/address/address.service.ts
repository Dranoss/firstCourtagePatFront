import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAddress } from '../../core/classes/user-address';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private static ADDRESS_URL = environment.baseUrl + 'user-addresses';
  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<UserAddress[]>{
    return this.http.get<UserAddress[]>(AddressService.ADDRESS_URL);
  }

  getAddressById(id: number): Observable<UserAddress>{
    return this.http.get<UserAddress>(`${AddressService.ADDRESS_URL}/${id}`);
  }

  postAddress(userAddress: UserAddress): Observable<UserAddress>{
    return this.http.post<UserAddress>(AddressService.ADDRESS_URL, userAddress);
  }
  putAddressById(userAddress: UserAddress): Observable<UserAddress>{
    return this.http.put<UserAddress>(`${AddressService.ADDRESS_URL}/${userAddress.id}`, userAddress);
  }
  deleteAddresseById(id: number): Observable<void> {
    return this.http.delete<void>(`${AddressService.ADDRESS_URL}/${id}`);
  }
}
