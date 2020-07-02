import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../../core/classes/user';
import { TypeOfUserService } from '../../typeUser/type-of-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  constructor(private userService:  UserService) { }


  addUser(user : User){
 this.userService.postUser(user);
  }
}

