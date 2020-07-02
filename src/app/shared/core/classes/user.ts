import { Address } from './user-address';
import { Rib } from './rib';

export class User {
  public id: number;
  public role: 'admin' | 'client';
  public type: string;
  public lastName: string;
  public firstName: string;
  public email: string;
  public phoneNumber: string;
  public password: string;
  public companyName: string;
  public siretNumber: string;
  public sponsorshipCode: string;
  public address: Address;
  public rib: Rib;

  constructor(
    role: 'admin' | 'client',
    type: string,
    lastName: string,
    firstName: string,
    email: string,
    phoneNumber: string,
    password: string,
    societyName: string,
    siretNumber: string,
    sponsorshipCode: string,
    address: Address,
    rib: Rib,
    id: number
    ){

    this.id = id;
    this.role = role;
    this.type = type;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.companyName = societyName;
    this.siretNumber = siretNumber;
    this.sponsorshipCode = sponsorshipCode;
    this.address = address;
    this.rib = rib;
  }
}
