import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/core/classes/user';
import { UserType } from 'src/app/shared/core/classes/user_type';
import { UserService } from 'src/app/shared/services/user/user.service';
import { UserTypeService } from 'src/app/shared/services/user-type/user-type.service';

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
  displayCompanyInfo = false;
  displayClientInfo = false;
  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeUserTypes();
  }
  navigateToCreateClient(){
    this.router.navigate([`/new-client`]);
  }

  // A SUPPRIMER CAR N'EST PAS UTILISE
  initializeUserTypes(){
    return this.userTypeService.getAllUserTypes().subscribe(data => {
      this.userTypes = data;
    });
  }
  selectUserType(userType){
    this.userTypeName = userType.name;
    this.userType = userType;
    return this.userTypeService.getUserTypeById(userType.id).subscribe(data => {
      this.users = data.users;
      this.filteredUsers = data.users;
      if (this.filteredUsers.length > 0){
        if (this.filteredUsers[0].companyName === ''){
          this.displayCompanyInfo = false;
        } else {
          this.displayCompanyInfo = true;
        }
        if (this.filteredUsers[0].lastName === ''){
          this.displayClientInfo = false;
        } else {
          this.displayClientInfo = true;
        }
      }
      this.filteredUsers.forEach(user => {
        return user.fullName = `${user.lastName} ${user.firstName} ${user.companyName}`;
      });
      this.users.forEach(user => {
        return user.fullName = `${user.lastName} ${user.firstName} ${user.companyName}`;
      });
      console.log(this.filteredUsers);
    });
  }
  filterUsers(name: string){
    this.filteredUsers = this.users;
    this.filteredUsers = this.filteredUsers.filter(user => {
      return user.fullName.toLowerCase().includes(name.toLowerCase());
    });
    return this.filteredUsers;
  }
  deleteUser(id){
    this.userService.deleteUserById(id).subscribe(() => {
      this.selectUserType(this.userType);
    });
  }
  navigateToUserDetails(id){
    this.router.navigate([`/client-details/${id}`]);
  }

  navigateToUserProjects(id){
    this.router.navigate([`/client-projects/${id}`]);
  }
}
