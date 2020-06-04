import { Address } from './user-address';
import { Rib } from './user-rib';

export class User {
  public id?: number;
  public role: 'admin' | 'client';
  public type: string;
  public lastname: string;
  public firstname: string;
  public email: string;
  public phoneNumber: string;
  public password: string;
  public societyName: string;
  public siretNumber: string;
  public sponsorshipCode: string;
  public address: Address;
  public rib: Rib;

  constructor(
    role: 'admin' | 'client',
    type: string,
    lastname: string,
    firstname: string,
    email: string,
    phoneNumber: string,
    password: string,
    societyName: string,
    siretNumber: string,
    sponsorshipCode: string,
    address: Address,
    rib: Rib,
    id?: number,
    ){

    this.id = id;
    this.role = role;
    this.type = type;
    this.lastname = lastname;
    this.firstname = firstname;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.societyName = societyName;
    this.siretNumber = siretNumber;
    this.sponsorshipCode = sponsorshipCode;
    this.address = address;
    this.rib = rib;
  }
}
