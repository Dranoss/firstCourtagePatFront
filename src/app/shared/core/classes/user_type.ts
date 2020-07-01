import { User } from './user';

export class UserType{
  public id?: number;
  public name: string;
  public users?: User[];

  constructor(
    name: string,
    id?: number
  ){
    this.id = id;
    this.name = name;
  }
}
