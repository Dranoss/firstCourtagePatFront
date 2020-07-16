import { Component, OnInit } from '@angular/core';
import { UserTypeService } from '../../shared/services/user-type/user-type.service';
import { UserType } from '../../shared/core/classes/user_type';

@Component({
  selector: 'apa-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.scss']
})
export class UserTypeListComponent implements OnInit {
  userTypes: UserType[] = [];
  userType: UserType = {name: ''};
  usersByUserType = [];
  displayForm = false;
  userTypeEdition = false;
  constructor(
    private userTypeService: UserTypeService,
  ) { }

  ngOnInit(): void {
    this.initializeUserType();
  }
  initializeUserType(){
    this.userTypeService.getAllUserTypes().subscribe(data => {
      this.userTypes = data;
      this.usersByUserType = [];
      this.countArrayElements(this.userTypes);
    });
  }
  countArrayElements(array: UserType[]){
    array.forEach(element => {
      return this.usersByUserType.push({id: element.id, name: element.name, users: element.users.length});
    });
  }
  toggleDisplayForm(){
    this.userType = {name: ''};
    return this.displayForm = !this.displayForm;
  }
  editUserType(userType: UserType){
    this.toggleDisplayForm();
    const type = this.userTypes.find(element => {
      return element.id === userType.id;
    });
    this.userType = {id: type.id, name: type.name};
    this.userTypeEdition = true;
  }
  createUserType(userType: UserType){
    this.userTypeService.createUserType(userType).subscribe(() => {
      this.initializeUserType();
    });
  }
  updateUserType(userType: UserType){
    this.userTypeService.updateUserType(userType).subscribe(() => {
      this.initializeUserType();
    });
  }
  deleteUserType(userType: UserType){
    this.userTypeService.deleteUserType(userType.id).subscribe(() => {
      this.initializeUserType();
    });
  }
  onSubmit(){
    if (this.userTypeEdition){
      this.updateUserType(this.userType);
      this.userTypeEdition = false;
    } else {
      this.createUserType(this.userType);
    }
    this.toggleDisplayForm();
  }
}
