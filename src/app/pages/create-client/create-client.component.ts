import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/core/classes/user';
import { Router } from '@angular/router';
import { UserTypeService } from '../../shared/services/user-type/user-type.service';
import { UserType } from '../../shared/core/classes/user_type';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'apa-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {
  editedUser: User = {
    lastName: '',
    firstName: '',
    phoneNumber: '',
    email: '',
    siretNumber: '',
    companyName: '',
    sponsorshipCode: '',
    userAddress: {streetNumber: 0, streetName: '', zipCode: '', cityName: ''},
    userRib: {ownerName: '', bankName: '', ibanNumber: '', bicCode: ''},
    role: 'client',
    password: '',
    userType: {id: 0, name: ''},
  };
  userTypes: UserType[] = [];
  constructor(
    private router: Router,
    private userTypeService: UserTypeService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getAllUserTypes();
  }

  navigateToClientsList(){
    this.router.navigate([`/client-list`]);
  }
  getAllUserTypes(){
    this.userTypeService.getAllUserTypes().subscribe((data) => {
      this.userTypes = data;
    });
  }
  selectUserType(userType){
    console.log(userType);
    this.editedUser.userType = {id: userType.id, name: userType.name};
  }
  onSubmit(){
    this.userService.postUser(this.editedUser).subscribe(() => {
    });
    this.navigateToClientsList();
  }
}
