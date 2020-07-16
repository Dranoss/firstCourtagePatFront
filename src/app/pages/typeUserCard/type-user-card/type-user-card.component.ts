import { Component, OnInit } from '@angular/core';
import { TypeOfUserService } from 'src/app/shared/services/typeUser/type-of-user.service';
import { UserType } from 'src/app/shared/core/classes/userType';
import { MatDialogRef } from '@angular/material/dialog';
import { UserCardComponent } from '../../user-card/user-card.component';

@Component({
  selector: 'apa-type-user-card',
  templateUrl: './type-user-card.component.html',
  styleUrls: ['./type-user-card.component.scss']
})
export class TypeUserCardComponent implements OnInit {

  typeOfUsers: UserType[];
  inputNewTypeUser;
  userType: UserType;
  typeSelected: UserType;

  constructor(private typeOfUserService: TypeOfUserService,
    public dialogRef: MatDialogRef<UserCardComponent>) { }

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
    this.userType = new UserType( this.inputNewTypeUser,this.typeSelected.id);
    this.typeOfUserService.putUserType(this.userType).subscribe(data => {
      this.getTypeOfUsers();});
      this.dialogRef.close('Close');


 }
  onValidate() {

    this.userType = new UserType( this.inputNewTypeUser);
    this.typeOfUserService.postUserType(this.userType).subscribe(data => {
      this.getTypeOfUsers();
      this.dialogRef.close('Close');
    });


  }
  onDelete() {
    this.typeOfUserService.deleteUserType(this.typeSelected.id).subscribe(data => {
      this.getTypeOfUsers();
      this.dialogRef.close('Close');

    });

   }

}
