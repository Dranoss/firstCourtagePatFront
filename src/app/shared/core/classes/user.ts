import { UserAddress } from './user-address';
import { UserRib } from './user-rib';
import { UserType } from './user_type';
import { Project } from './project';

export class User {
  public id?: number;
  public role?: 'admin' | 'client';
  public userType?: UserType;
  public lastName?: string;
  public firstName?: string;
  public email?: string;
  public phoneNumber?: string;
  public password?: string;
  public companyName?: string;
  public siretNumber?: string;
  public sponsorshipCode?: string;
  public userAddress?: UserAddress;
  public userRib?: UserRib;
  public projects?: Project[];
  public fullName?: string;

  constructor(
    role: 'admin' | 'client',
    userType: UserType,
    lastName: string,
    firstName: string,
    email: string,
    phoneNumber: string,
    password: string,
    companyName: string,
    siretNumber: string,
    sponsorshipCode: string,
    userAddress: UserAddress,
    userRib: UserRib,
    id?: number,
    projects?: Project[],
    ){

    this.id = id;
    this.role = role;
    this.userType = userType;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.password = password;
    this.companyName = companyName;
    this.siretNumber = siretNumber;
    this.sponsorshipCode = sponsorshipCode;
    this.userAddress = userAddress;
    this.userRib = userRib;
    this.projects = projects;
  }
}
