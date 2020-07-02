import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../../core/classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserCardService {

  constructor(private userService:  UserService) { }


  addUser(user : User){
 this.userService.postUser(user);
  }
}

