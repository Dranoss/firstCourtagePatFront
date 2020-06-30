import { Address } from './user-address';
import { Rib } from './user-rib';
import { Type } from './type';

export class User {
  public id: number;
  public role: 'admin' | 'client';
  public type: Type;
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

  constructor(){
  }
}
