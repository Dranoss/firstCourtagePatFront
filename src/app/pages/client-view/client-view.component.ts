import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/core/classes/user';
import { UserService } from '../../shared/services/user/user.service';
import { UserTypeService } from '../../shared/services/user-type/user-type.service';
import { UserType } from '../../shared/core/classes/user_type';
import { Router } from '@angular/router';

@Component({
  selector: 'apa-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.scss']
})
export class ClientViewComponent implements OnInit {
  users: User[] = [];
  userTypeName: string;
  userType: UserType;
  userTypes: UserType[] = [];
  filterSearch = '';
  filteredUsers: User[] = [];
  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeUserTypes();
  }
  navigateToCreateClient(){
    this.router.navigate([`/client-details/new-client`]);
  }
  initializeUsers(){
    return this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }
  initializeUserTypes(){
    return this.userTypeService.getAllUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }
  selectUserType(userType){
    this.userTypeName = userType.name;
    this.userType = userType;
    console.log(this.userTypeName);
    return this.userTypeService.getUserTypeById(userType.id).subscribe(data => {
      this.users = data.users;
      this.filteredUsers = data.users;
      console.log(this.users);
    });
  }
  filterUsers(name: string){
    if (name == null){
      this.filteredUsers = this.users;
    } else if (this.userTypeName === 'Particulier'){
      return this.filteredUsers = this.users.filter(user => user.lastName.toLowerCase().includes(name.toLowerCase()));
    } else {
      return this.filteredUsers = this.users.filter(user => user.companyName.toLowerCase().includes(name.toLowerCase()));
    }
  }
  deleteUser(id){
    this.userService.deleteUserById(id).subscribe(() => {
      this.selectUserType(this.userType);
    });
  }
  navigateToUserDetails(id){
    this.router.navigate([`/client-details/${this.userTypeName}/${id}`]);
  }

  navigateToUserProjects(id){
    this.router.navigate([`/client-projects/${this.userTypeName}/${id}`]);
  }
}
