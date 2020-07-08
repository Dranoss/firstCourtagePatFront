import { Component, OnInit } from '@angular/core';
import { TypeOfUserService } from 'src/app/shared/services/typeUser/type-of-user.service';
import { UserType } from 'src/app/shared/core/classes/userType';

@Component({
  selector: 'apa-type-user-card',
  templateUrl: './type-user-card.component.html',
  styleUrls: ['./type-user-card.component.scss']
})
export class TypeUserCardComponent implements OnInit {

  typeOfUsers: UserType[];
  inputNewTypeUser;
  userType: UserType;

  constructor(private typeOfUserService: TypeOfUserService) { }

  ngOnInit(): void {

    this.getTypeOfUsers();
  }


  compareObjects(o1: any, o2: any) {
    if (o1?.id == o2?.id) {
      return true;
    }
    else { return false; }
  }

  // method which initialize the select list of type of users
  getTypeOfUsers() {

    this.typeOfUserService.getTypeOfUsers()
      .subscribe(data => {
        this.typeOfUsers = data;
      });

  }

  onModify() {

//    this.userType.name = this.inputNewTypeUser;
    this.userType = new UserType( this.inputNewTypeUser,this.userType.id);
    this.typeOfUserService.putUserType(this.userType).subscribe(data => {
      this.getTypeOfUsers();});

 }
  onValidate() {

    this.userType = new UserType( this.inputNewTypeUser);
    this.typeOfUserService.postUserType(this.userType).subscribe(data => {
      this.getTypeOfUsers();});


  }
  onDelete() { }

}

